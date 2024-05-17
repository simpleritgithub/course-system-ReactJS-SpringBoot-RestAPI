
	package com.demo.model;

	import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

	@Entity
	public class Course {
		
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name = "CourseID")
		long courseId;
		@Column(name = "Course_Title")
		private String title;
		@Column(name = "Course_Description")
		private String description;
		
		 
		public Course() {
			super();
			// TODO Auto-generated constructor stub
		}


		public Course (long id,String title,String description) {
			super();
			this.courseId=id;
			this.title = title;
			this.description=description;
		}


		public long getId() {
			return courseId;
		}
		public void setId(long id) {
			this.courseId = id;
		}
		public String getTitle() {
			return title;
		}
		public void setTitle(String title) {
			this.title = title;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}


		@Override
		public String toString() {
			return "Course [id=" + courseId + ", title=" + title + ", description=" + description + "]";
		}
		
	}

