package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.demo.model.Course;
import com.demo.service.CourseService;


@RestController
public class MyController {

	@Autowired
	private CourseService cs;
	
	@GetMapping("/Courses")
	public List<Course> getCourse()
	{
		return cs.findAll();
	}
	
	@GetMapping("/findById/{courseId}")
	public Course findCourseById(@PathVariable Long courseId) {
	    return cs.findCourseById(courseId);
	}
	
	
	@PostMapping(value = "AddCourses")
	public Course saveCourse(@RequestBody Course c) {
		return cs.Save(c);
	}
	
	@PutMapping(value = "UpdateCourses")
	public Course UpdateCourse(@RequestBody Course c) {
		return cs.Save(c);
		
	}
	 
	 @DeleteMapping("/DeleteCourse/{id}")
	    public ResponseEntity<Void> deleteCourse(@PathVariable("id") Long courseId) {
	        cs.deleteCourseById(courseId);
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	 
}
}

	
	
	
	
	
	
	
	
	
	
	
	


