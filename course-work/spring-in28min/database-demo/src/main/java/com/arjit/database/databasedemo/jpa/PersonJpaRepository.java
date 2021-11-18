package com.arjit.database.databasedemo.jpa;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.arjit.database.databasedemo.entity.Person;

@Repository
@Transactional
public class PersonJpaRepository {
	//All operations in a session are stored in it
	//Manages entitites, It is interface to persistenceContext
	@PersistenceContext 
	EntityManager entityManager;
	
	
	//Read all - Done using JPQL(java persistence query language)
	// JPQL is written on Entity & not on Database
	public List<Person> findAll() {
		TypedQuery<Person> namedQuery = entityManager.createNamedQuery("find_all_persons",Person.class);
		return namedQuery.getResultList();
	}
	
	//Read
	public Person findById(int id) {
		return entityManager.find(Person.class, id);
	}
	
	//Insert and update, both are done by merge
	public Person insertOrUpdate(Person p) {
		return entityManager.merge(p);
	}
	
	// delete
	public void deleteById(int id) {
		Person p = findById(id);
		entityManager.remove(p);
	}
}
