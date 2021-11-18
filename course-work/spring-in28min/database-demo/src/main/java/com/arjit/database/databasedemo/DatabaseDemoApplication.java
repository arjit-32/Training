package com.arjit.database.databasedemo;

import java.sql.Timestamp;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.arjit.database.databasedemo.entity.Person;
import com.arjit.database.databasedemo.jdbc.PersonJdbcDao;
import com.arjit.database.databasedemo.jpa.PersonJpaRepository;

@SpringBootApplication
public class DatabaseDemoApplication implements CommandLineRunner{ //CommandLineRunner is just a utility method that runs after applicationcontext 
	//Using JDBC
//	@Autowired
//	PersonJdbcDao personjdbcdao;
	
	//Using JPA
	@Autowired
	PersonJpaRepository repository;
	
	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	public static void main(String[] args) {
		SpringApplication.run(DatabaseDemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// Using JDBC
//		logger.info("Reading All users -> {} ",personjdbcdao.findAll());
//		logger.info("Reading user by id=100011 -> {}",personjdbcdao.findById(10001));
//		logger.info("Inserting into user",personjdbcdao.insertPerson(new Person(10009,"Krishna","Kerala",new util.Date()));
//		logger.info("Update person with id=10001",personjdbcdao.updateName(10001,"Arjit Sharma"));
		
		//Using JPA
		logger.info("Inserting person -> {} ",repository.insertOrUpdate( new Person("Arjit","UK",new java.util.Date())));
		logger.info("Inserting person -> {} ",repository.insertOrUpdate( new Person("Tomato","US",new java.util.Date())));
		logger.info("Reading user by id=1 -> {} ",repository.findById(1));
		logger.info("Read all -> {}",repository.findAll());
	
	}

}
