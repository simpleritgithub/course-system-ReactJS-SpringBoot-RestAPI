package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.model.Course;

@Repository
public interface CourseDao extends JpaRepository<Course, Long> {
	
	 List<Course> findAll();
	    Course findCourseById(Long courseId);
	    Course save(Course course);
	    void deleteByCourseId(long courseId);
	    
	
}
