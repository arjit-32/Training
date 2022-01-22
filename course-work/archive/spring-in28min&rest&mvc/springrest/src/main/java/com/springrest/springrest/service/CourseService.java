package com.springrest.springrest.service;

import java.util.List;
import java.util.Optional;

import com.springrest.springrest.entities.Course;

public interface CourseService {
	public List<Course> getCourses();

	public Optional<Course> getCourse(long id);

	public Course addCourse(Course c);

	public Course updateCourse(Course c);

	public void deleteCourse(long id);
}
