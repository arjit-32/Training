package com.arjit.database.databasedemo.springData;
import org.springframework.data.jpa.repository.JpaRepository;
import com.arjit.database.databasedemo.entity.Person;

public interface PersonSpringDataRepository extends JpaRepository<Person,Integer>{

}
