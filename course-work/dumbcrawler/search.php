<?php
    include("config.php");
    include("classes/siteResultsProvider.php");

    if (isset($_GET["term"])){
        $term=$_GET["term"];
    }else{
        exit("Enter search term");
    }
    $type = isset($_GET["type"])? $_GET["type"] : "sites";
?>
<!doctype html>
<html lang="en">
  <head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
    <body>
        <div class="header">
            <form action="search.php" method="get">
                <input type="text" name="term">
                <input type="submit" value="search">
            </form>
        </div>
        <div class="tabsContainer">
            <ul>
                <li><a href='<?php echo "search.php?term=$term&type=sites"; ?>'>Sites</a></li>
                <li><a href='<?php echo "search.php?term=$term&type=images"; ?>'>Images</a></li>
            </ul>
        </div>
        <div class="mainResultsSection">
            <?php
            $resultsProvider = new siteResultsProvider($con);
            $numResults = $resultsProvider->getNumResults($term);
            ?>
            
            <p class = "resultsCount">
            <?php echo $numResults." results found " ?>
            </p>
        </div>
    </body>
</html>