<?php
include("config.php");
include("classes/DomDOcumentParser.php");

$alreadyCrawled = array();//Done links
$crawling = array();//links we need to Crawl
$alreadyFoundImages = array();

function insertLink($url, $title, $description, $keywords){
    global $con;

    $query = $con->prepare("INSERT INTO sites(url, title, description, keywords)
             VALUES(:url,:title,:description,:keywords)");
    
    $query->bindParam(":url", $url);
    $query->bindParam(":title", $title);
    $query->bindParam(":description", $description);
    $query->bindParam(":keywords", $keywords);

    return $query->execute();
}

function insertImage($url, $src, $alt, $title){
    global $con;

    $query = $con->prepare("INSERT INTO images(sitesUrl, imageUrl, alt, title)
             VALUES(:siteUrl,:imageUrl,:alt,:title)");
    
    $query->bindParam(":siteUrl", $url);
    $query->bindParam(":imageUrl", $src);
    $query->bindParam(":alt", $alt);
    $query->bindParam(":title", $title);

    $query->execute();
}

function linkExists($url){
    global $con;

    $query = $con->prepare("SELECT * FROM sites WHERE url = :url");
    
    $query->bindParam(":url", $url);
    $query->execute();

    return $query->rowCount()!=0;
}


function createLink($src, $url){
    //URL we found this link on .Then convert relative link to Absolute using the URL
    $scheme = parse_url($url)["scheme"];//http or https
    $host = parse_url($url)["host"];//www.arjitsharma.com


     # //www.arjitsharma.com->http://www.arjit.sharma.com
    if(substr($src,0,2) == "//") 
        $src = $scheme . ":" . $src;
    

    # /Blogs/blog1.html -> http://www.arjitsharma.com/Blogs/blog1.html
    else if(substr($src,0,1) == "/")
        $src = $scheme . "://" . $host . $src;
    

    # ./Blogs/blog1.html  -->means same directory(folder)
    # From http://www.arjitsharma.com/public/index.html to http://www.arjitsharma.com/public/Blogs/blog1.html
    else if(substr($src,0,2) == "./")
        $src = $scheme . "://" . $host . dirname(parse_url($url)["path"]) . substr($src,1);
    

    # ../Blogs/blog1.html ---> ../ means parent directory
    # From http://www.arjitsharma.com/public/main/index.html to http://www.arjitsharma.com/public/Blogs/blog1.html
    else if(substr($src,0,3) == "../")
        $src = $scheme . "://" . $host . dirname(dirname(parse_url($url)["path"])) . substr($src,2);     
    
    
    #    Blogs/blog1.html 
    else if(substr($src,0,5) != "https" && substr($src,0,4) != "http" ){//Making sure it is not a absolute link
        $src = $scheme . "://" . $host ."/" . $src;
    }


    return $src;
}

function getDetails($url){
    global $alreadyFoundImages;

    $parser = new DomDocumentParser($url);

    $titleArray = $parser->getTitleTags();

    if(sizeof($titleArray) == 0 or $titleArray->item(0) == NULL){
        return;
    }

    $title = $titleArray->item(0)->nodeValue;//we write item(0) because what if there are 2 titles
    $title = str_replace("\n","",$title);//remove new line in titile

    if($title == ""){//if title not present ..ignore krro
        return;
    }

    $description = "";
    $keywords = "";

    $metasArray = $parser->getMetaTags();

    foreach ($metasArray as $meta){
        if($meta->getAttribute("name") == "description"){
            $description = $meta->getAttribute("content");
        }

        if($meta->getAttribute("name") == "keywords"){
            $keywords = $meta->getAttribute("content");
        }
    }
    $description = str_replace("\n","",$description);//get rid of new lines
    $keywords = str_replace("\n","",$keywords);//get rid of new lines
 
    if(linkExists($url)){
        echo "Link Exists <br>";
    }
    else if(insertLink($url,$title,$description,$keywords)){
        echo "Success <br> ";
    }
    else{
        echo "Fail";
    }
    $imageArray = $parser->getImages();
    foreach($imageArray as $image){
        $src = $image->getAttribute("src");
        $alt = $image->getAttribute("alt");
        $title = $image->getAttribute("title");

        if(!$title and !$alt){//We need alt or title to make search functionality
            continue;
        }
        $src = createLink($src, $url);
        
        if(!in_array($src,$alreadyFoundImages)){
            $alreadyFoundImages[] = $src;
            insertImage($url,$src,$alt,$title);
        }
    }
}


function followLinks($url){
    global $alreadyCrawled;
    global $crawling;

    $parser = new DomDocumentParser($url);

    $linklist = $parser->getLinks();

    foreach($linklist as $link){
        $href = $link->getAttribute("href");
        if(strpos($href,"#") !== false)
            continue;
        else if(substr($href,0,11) == "javascript:")
            continue;


        $href = createLink($href, $url);

        if(!in_array($href, $alreadyCrawled)){
            $alreadyCrawled[] = $href; // $arr[]=item means inserting item in arr
            $crawling[] = $href;

            getDetails($href);
        }
     
    }

    array_shift($crawling);//pops top element of array

    foreach($crawling as $site){
        followLinks($site);
    }

}

$starturl="https://www.stackoverflow.com";
followLinks($starturl);
?>