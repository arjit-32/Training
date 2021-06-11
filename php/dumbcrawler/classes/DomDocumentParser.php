<?php 
/* ------------------------------     
    FILE HANDLING        

    STREAMS - a stream is a resource object which exhibits streamable behavior. 
    That is, it can be read from or written to in a linear fashion.

    Note :
        
        1. ftell($file);//Tells where pointer is
    
        2. When a file is too big ,u cant read entire file in memory in single go
            $file = file_get_contents(__DIR__ . '/empList.txt');


    We use Streams to provide data on demand.
    //Opening a file
    $file = fopen(__DIR__ . '/empList.txt','r+') or die("Unable to open");//r+ : read-write mode
    
    //Reading a line
    $employee = fgets($file);
    echo $employee;

    //Reading whole file
    $fileData = fread($file,filesize($file));
        
            or

    while(!feof($file)){
        echo fgets($file) . "<br>";
    }

    //Writing to file
    $newFile = fopen("newFile.txt", "w") or die("Unable to open file");
    $line = "Hello World, Add this line to file";
    fwrite($newFile,$line);

    //Deleting a File
    unlink("file.txt");
    
    //Read a file into a string
    $text = file_get_contents("files/my_file.txt");
    echo $text;

    
    STREAM WRAPPERS- Tells the stream how to handle specific protocols.
                    ex-https,ftp,zip
    STREAM CONTEXTS- Set of parameters or wrapper specific options

    stream_context_create() - Creates and returns a stream context with any options supplied in options preset.

        <?php
        $opts = array(
        'http'=>array(
        'method'=>"GET",
        'header'=>"Accept-language: en\r\n" .
        "Cookie: foo=bar\r\n"
        )
        );

        $context = stream_context_create($opts);
    -------------------------------------------------

    DOMDOCUMENT CLASS :
    Represents an entire HTML or XML document; serves as the root of the document tree.
    Helps in parsing xml,html and creating xml

        Loading HTML:
        doc=new DomDocument();
        
        //convert html of a URL to string using file_get_contents
        //loading HTML string 
        $doc->loadHTML(file_get_contents(URL));
        
        //Usefull function to get HTML content
        //Getting Elements
        $doc->getElementsById("idName");
        $doc->getElementsByTagName("a");
        $doc->getElementsByTagName("img")->getAttribute('src');
        
        //Creating and adding elemnt in doc
        $div = doc->createElement('div');
        $div_clone = $div->cloneNode();
        $doc->appendChild($div);
        $doc->saveHTML();

        


*/
class DomDocumentParser{

    private $doc;

    public function __construct($url){
           
        $options = array(
            'http'=>array('method'=>"GET", 'header' => "User-Agent: doodleBot/0.1\n")
        );
        $context = stream_context_create($options);
        //context is created with specified options stream_context_create()
  
        $this->doc=new DomDocument();
        @$this->doc->loadHTML(file_get_contents($url,false,$context));
        //loadHTML() : Loads Html file from a string 
        //file_get_contents() : Read a file into a string
    }

    public function getLinks(){
        return $this->doc->getElementsByTagName("a");
    }

    public function getTitleTags(){
        return $this->doc->getElementsByTagName("title");
    }

    public function getMetaTags(){
        return $this->doc->getElementsByTagName("meta");
    }

    public function getImages(){
        return $this->doc->getElementsByTagName("img");
    }


}
?>