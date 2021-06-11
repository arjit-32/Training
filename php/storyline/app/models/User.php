<?php
  class User {
    private $db;

    public function __construct(){
      $this->db = new Database;
    }

    //Register User
    public function register($data){
      $this->db->query('INSERT INTO users(name, email, password) VALUES (:name, :email, :password)');

      $this->db->bind(':name',$data['name']);
      $this->db->bind(':email',$data['email']);
      $this->db->bind(':password',$data['password']);
       
      if($this->db->execute()){
        return true;
      }else{
        return false;
      }

    }


    public function login($email, $password){
      $this->db->query('SELECT * FROM users WHERE email = :email');
      $this->db->bind(':email',$email);

      $row = $this->db->single();
      
      $hashed_password = $row->password;
      if(password_verify($password, $hashed_password)){
        return $row;
      }else{
        return false;
      }

      
    }

    // Find user by email
    public function findUserByEmail($email){
      $this->db->query('SELECT * FROM users WHERE email = :email');
      $this->db->bind(':email', $email);

      $row = $this->db->single();

      // Check row
      if($this->db->rowCount() > 0){
        return true;
      } else {
        return false;
      }
    }



    // Find user by email
    public function getUserById($id){
      $this->db->query('SELECT * FROM users WHERE id = :id');
      $this->db->bind(':id', $id);

      $row = $this->db->single();

      return $row; 


    }

    //Get Users posts
    public function getUsersPosts(){
      $this->db->query('SELECT 
                *,
                posts.id as postId,
                posts.created_at as postCreatedAt
                FROM posts
                WHERE user_id = :user_id
                ORDER BY posts.created_at DESC
                ');

      $this->db->bind(':user_id',$_SESSION['user_id']);

      $results = $this->db->resultSet();

      return $results;
    }




  }