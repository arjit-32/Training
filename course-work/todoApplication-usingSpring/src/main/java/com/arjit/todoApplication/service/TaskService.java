package com.arjit.todoApplication.service;

import java.util.List;

import com.arjit.todoApplication.entity.Task;

public interface TaskService {
	List<Task> getAllTasks();
	Task getTaskById(int id);
	Task insertTask(Task t);
	void deleteTaskById(int id);
	Task updateTask(Task t);
}
