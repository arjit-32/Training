package com.arjit.todoApplication.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="task")
public class Task {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="task_heading",nullable=false)
	private String taskHeading;
	@Column(name="task_description")
	private String taskDescription;
	
	public Task() {}
	
	public Task(int id, String taskHeading, String taskDescription) {
		super();
		this.id = id;
		this.taskHeading = taskHeading;
		this.taskDescription = taskDescription;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTaskHeading() {
		return taskHeading;
	}
	public void setTaskHeading(String taskHeading) {
		this.taskHeading = taskHeading;
	}
	public String getTaskDescription() {
		return taskDescription;
	}
	public void setTaskDescription(String taskDescription) {
		this.taskDescription = taskDescription;
	}
}
