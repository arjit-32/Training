package com.springrest.springrest.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.entities.Course;

@Service
public class CourseServiceImpl implements CourseService {

	//List<Course> l;
	@Autowired
	private CourseDao coursedao;
	
	public CourseServiceImpl() {
//		l=new ArrayList<Course>();
//		l.add(new Course((long) 123,"Title 1","Description 1"));
//		l.add(new Course((long) 124,"Title 2","Description 2"));
	}
	@Override
	public List<Course> getCourses() {
		return coursedao.findAll();
	}
	@Override
	public Optional<Course> getCourse(long id) {

//		for(Course i: l) {
//			if(i.getId()==id)	return i;
//		}
//		return null;
		return coursedao.findById(id);
	}
	
	@Override
	public Course addCourse(Course c) {
		//l.add(c);
		return coursedao.save(c);
	}
	
	@Override
	public Course updateCourse(Course c) {
//		for(Course i: l) {
//			if(i.getId()==c.getId()) {
//				i.setTitle(c.getTitle());
//				i.setDescription(c.getDescription());
//				return i;
//			}
//		}
		return coursedao.save(c);
	}
	@Override
	public void deleteCourse(long id) {
//		for(Course i: l) {
//			if(i.getId()==id) {
//				l.remove(i);
//			}
//		}
// OR
//		l = this.l.stream().filter(e->e.getId()!=id).collect(Collectors.toList());
		
		coursedao.deleteById(id);;
	}

}
