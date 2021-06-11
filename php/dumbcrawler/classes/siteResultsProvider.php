<?php
class siteResultsProvider{
    
    private $con;
    public function __construct($con){
        $this->con = $con;
    }

    public function getNumResults($term){
        $query = $this->con->prepare("SELECT COUNT(*) as total
        FROM sites WHERE title LIKE :term
        OR url LIKE :term
        OR keywords LIKE :term
        OR description LIKE :term");
        //store count in total column
        

        $searchTerm = "%" . $term . "%";
        $query->bindParam(":term",$searchTerm);
        $query->execute();

        $row = $query->fetch(PDO::FETCH_ASSOC);
        return $row["total"];
    }

    
}


?>