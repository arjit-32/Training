<?php 

//It is base controller,Loads models and views
class Controller{
	//Load Models from Controller
	public function model($model){
		//require model files
		require_once '../app/models/' . $model . '.php';

		//Instantiate model
		return new $model();//Example - return new Post();
	}


	//data will be passed into the view
	public function view($view, $data =[]){
		//check for view file
		if(file_exists('../app/views/' .$view . '.php')){
			require_once '../app/views/'.$view . '.php';
		}else{
			die('View Doesnt exist');
		}
	}
}


?>