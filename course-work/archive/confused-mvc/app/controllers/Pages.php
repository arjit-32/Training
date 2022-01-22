<?php 
	class Pages extends Controller{	
	public	function __construct(){
			
	}

	//index is default method that we have set in core.php
	public function index(){
		$data = [
			'title' => 'ConfusedMVC'
		];

		$this->view('pages/index', $data);
	}

	public function about(){
		$data = [
			'title' => 'About Us'
		];
		$this->view('pages/about',$data);
	}

	
}

?>