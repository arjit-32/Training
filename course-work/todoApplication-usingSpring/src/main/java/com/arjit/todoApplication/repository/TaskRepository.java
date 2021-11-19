package com.arjit.todoApplication.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.arjit.todoApplication.entity.Task;

public interface TaskRepository extends JpaRepository<Task,Integer>{

}
