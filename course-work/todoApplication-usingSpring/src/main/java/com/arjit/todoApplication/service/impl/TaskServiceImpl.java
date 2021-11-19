package com.arjit.todoApplication.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.arjit.todoApplication.entity.Task;
import com.arjit.todoApplication.repository.TaskRepository;
import com.arjit.todoApplication.service.TaskService;

@Service
public class TaskServiceImpl implements TaskService{
	
	@Autowired
	private TaskRepository repository; 
	
	@Override
	public List<Task> getAllTasks() {
		repository.findAll();
		return null;
	}

	@Override
	public Task insertTask(Task t) {
		return repository.save(t);
	}

	@Override
	public void deleteTaskById(int id) {
		repository.deleteById(id);
	}

	@Override
	public Task updateTask(Task t) {
		return repository.save(t);
	}

	@Override
	public Task getTaskById(int id) {
		return repository.getById(id);
	}
	
	

}
