package com.arjit.database.databasedemo.jdbc;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.arjit.database.databasedemo.entity.Person;

@Repository
public class PersonJdbcDao {
	@Autowired
	JdbcTemplate jdbcTemplate; //Spring uses this class to use jdbc
	
	// Custom RowMapper can be used in place of BeanProperyRowMapper
	class PersonRowMapper implements RowMapper<Person>{
		@Override
		public Person mapRow(ResultSet rs, int rowNum) throws SQLException {
			Person p = new Person();
			p.setId(rs.getInt("id"));
			p.setName(rs.getString("name"));
			p.setLocation(rs.getString("location"));
			p.setBirthdate(rs.getTimestamp("birth_date"));
			return p;
		}
	}
	
	// Read
	public List<Person> findAll(){
		return jdbcTemplate.query("Select * from person", new BeanPropertyRowMapper<Person>(Person.class));
		// 2nd arg can be changed to new PersonRowMapper()
	}
	
	// Read
	public Person findById(int id) {
		return jdbcTemplate.queryForObject("\nSelect * from person where id=?", 
				new BeanPropertyRowMapper<Person>(Person.class), 
				new Object[] {id});
				}
	
	// Delete 
	public int deleteById(int id) {
		return jdbcTemplate.update("DELETE FROM person WHERE id=?", new Object[] {id});
	}
	
	// Insert
	public int insertPerson(Person p) {
		return jdbcTemplate.update("Insert into person(id,name,location,birth_date) Values(?,?,?,?)", new Object[] {p.getId(),p.getName(),p.getLocation(),new Timestamp(p.getBirthdate().getTime())});
	}
	
	// Update
	public int updateName(int id, String name) {
		return jdbcTemplate.update("Update person set name=? where id=?", new Object[] {name,id});
	}

	
	

}
