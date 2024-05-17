package com.demo.service;

import java.util.List;

import com.demo.model.Course;

public interface CourseService
{
	List<Course>findAll();
	public Course findCourseById(long CourseId);
	Course Save(Course c);
	void deleteCourseById(Long courseId);

   
	
}

