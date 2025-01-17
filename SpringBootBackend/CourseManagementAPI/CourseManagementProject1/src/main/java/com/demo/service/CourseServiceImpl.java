package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.CourseDao;
import com.demo.model.Course;


@Service
public class CourseServiceImpl implements CourseService {
	
	@Autowired
	private CourseDao cd;

	@Override
	public List<Course> findAll() {
		return cd.findAll();   
	}

	@Override
	public Course findCourseById(long CourseId) {
		return cd.findCourseById(CourseId);
	}

	@Override
	public Course Save(Course c) {
		return cd.save(c);
	}
	@Override
    public void deleteCourseById(Long courseId) {
        cd.deleteById(courseId);
    }

	
	

	

	
	
	
}
