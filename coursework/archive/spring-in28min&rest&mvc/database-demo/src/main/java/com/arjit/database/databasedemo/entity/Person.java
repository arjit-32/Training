package com.arjit.database.databasedemo.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.NamedQuery;


//@Table(name="person"), if class name is different from table name
@Entity
@NamedQuery(name="find_all_persons",query="Select p from Person p")
public class Person {
	
	@Id
	@GeneratedValue
	int id;
	//@Column(name="name"), if column name is different from class members
	String name;
	String location;
	Date birthdate;
	
	public Person() { //Need to provide default constructor when we use BeanPropertyRowMapper
		
	}
	
	public Person(int id, String name, String location, Date birthdate) {
		super();
		this.id = id;
		this.name = name;
		this.location = location;
		this.birthdate = birthdate;
	}
	
	public Person(String name, String location, Date birthdate) { // Hibernate will use this constructor
		super();
		this.name = name;
		this.location = location;
		this.birthdate = birthdate;
	}

	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public Date getBirthdate() {
		return birthdate;
	}
	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
	}
	@Override
	public String toString() {
		return "\nPerson [id=" + id + ", name=" + name + ", location=" + location + ", birthdate=" + birthdate + "]";
	}
}
