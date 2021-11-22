package com.springrest.springrest.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.springrest.springrest.entities.Course;
import com.springrest.springrest.service.CourseService;

@RestController
public class CourseController {
	@Autowired
	private CourseService courseservice;
	
	//Get all courses
	@GetMapping("/courses")
	public List<Course> getCourses(){
		return this.courseservice.getCourses();
	}
	
	//Get a course with given id
	@GetMapping("/courses/{courseId}")
	public Optional<Course> getCourse(@PathVariable String courseId){ 
		//@PathVariable is used to dynamically get courseId given in URL
		return this.courseservice.getCourse(Long.parseLong(courseId));
	}
	
	// Add a course
	@PostMapping(path="/courses",consumes="application/json")
	public Course addCourse(@RequestBody Course c) {
		return this.courseservice.addCourse(c);
	}
	
	// Update course
	@PutMapping("/courses")
	public Course editCourse(@RequestBody Course c) {
		return this.courseservice.updateCourse(c);
	}
	
	// Delete course
	@DeleteMapping("/courses/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId) {
		try {
			this.courseservice.deleteCourse(Long.parseLong(courseId));
			return new ResponseEntity<>(HttpStatus.OK);
		} catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
}
