<?php
  class Pages extends Controller {
    public function __construct(){
     
    }
    
    public function index(){
      if(isLoggedIn()){
         redirect('posts');
      }


      $data = [
        'title' => 'Join Story-line today',
        'description' => 'Well-told stories are very powerful artefacts'
      ];
     
      $this->view('pages/index', $data);
    }

    public function about(){
      $data = [
        'title' => 'About Us',
        'description' => 'This webapp is made on top of ConfusedMVC, If you wish to contribute to the project please head on to Github repo given below'
      ];

      $this->view('pages/about', $data);
    }
  }