package com.arjit.todoApplication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.arjit.todoApplication.entity.Task;
import com.arjit.todoApplication.service.TaskService;

@Controller
public class TaskController {
	
	@Autowired
	private TaskService service;

	@GetMapping("/tasks")
	public String listTasks(Model m) {
		m.addAttribute("tasks",service.getAllTasks());
		return "tasks";
	}
	
	@GetMapping("/tasks/new")
	public String createTasks(Model m) {
		Task t = new Task();
		m.addAttribute("tasks",t);
		return "create_task";
	}
	
	@PostMapping("/tasks")
	public String saveStudent(@ModelAttribute("tasks") Task t) {
		service.insertTask(t);
		return "redirect:/tasks";
	}
	
	@GetMapping("/tasks/edit/{id}")
	public String editStudentForm(@PathVariable int id, Model model) {
		model.addAttribute("student", service.getTaskById(id));
		return "edit_task";
	}

	@PostMapping("/tasks/{id}")
	public String updateTask(@PathVariable int id,
			@ModelAttribute("task") Task t,
			Model model) {
		
		// get student from database by id
		Task existingTask = service.getTaskById(id);
		existingTask.setId(id);
		existingTask.setTaskDescription(t.getTaskDescription());
		existingTask.setTaskHeading(t.getTaskHeading());
		
		// save updated student object
		service.updateTask(existingTask);
		return "redirect:/tasks";		
	}
	
	// handler method to handle delete student request
	
	@GetMapping("/tasks/{id}")
	public String deleteTask(@PathVariable int id) {
		service.deleteTaskById(id);
		return "redirect:/tasks";
	}
	
	
	
	
}
