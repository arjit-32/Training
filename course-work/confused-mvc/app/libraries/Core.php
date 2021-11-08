<?php
/*
 * App Core Class
 * Creates URL and Loads core controller
 * URL FORMAT - /controller/method/parameters
*/

/**
 * 
 */
class Core 
{
	protected $currentController = 'Pages';
	protected $currentMethod = 'index';
	protected $params = [];

	public function __construct(){
		//print_r($this->getUrl());
		$url = $this->getUrl();

		//Check if url is not null then update currentController
		if(!is_null($url)){ 
			//Look in controllers for first value
			if(file_exists('../app/controllers/'. ucwords($url[0]).'.php')){
				//If 1st item of url array exists in controller, set as controller
				$this->currentController = ucwords($url[0]);
				//Unset 0 Index
				unset($url[0]);
			}
		}


		//Require the controller
		require_once '../app/controllers/'. $this->currentController . '.php';

		//Instantiate controller class
		$this->currentController = new $this->currentController;


		//Check for 2nd value in URL
		if(isset($url[1])){
			if(method_exists($this->currentController, $url[1])){
				$this->currentMethod = $url[1];

				//unset url[1]
				unset($url[1]);
			}
		}


		//Get parameters, if anything except 1st and 2nd index present in url add it to params array
		$this->params = $url ? array_values($url): [];

		//Call a callback with array of params
		call_user_func_array([$this->currentController,$this->currentMethod], $this->params);

	}

	public function getUrl(){
		if(isset($_GET['url'])){
			//rtrim("Hello World","World") -> "Hello"       
			//Removes characters from the right side of a string
			$url = rtrim($_GET['url'],'/'); //Remove last '/'
			$url = filter_var($url, FILTER_SANITIZE_URL);
			$url = explode('/',$url);//From "/post/edit/1" to array having post,edit,1
			return $url;
		}
	}
}

?>