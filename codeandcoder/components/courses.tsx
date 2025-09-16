"use client";

import React from "react";
import Link from "next/link";
import { FiUser, FiStar, FiClock, FiBook } from "react-icons/fi";
import styles from "./courses.module.css";

const CoursesOne = () => {
  const courses = [
    {
      image: "/image/web-dev.jpg",
      title: "Data Science Mastery 2025",
      description:
        "Launch your career in Data Science with this comprehensive course. Learn data analysis, machine learning, and visualization to become job-ready.",
      instructor: "Code&Coder",
      level: "Beginner",
      duration: "30h 15m",
      lessons: 180,
      price: "৳2999",
      originalPrice: "₹4999",
      discount: "40% OFF",
      link: "/courses/data-science",
    },
    {
      image: "/image/app-dev.jpg",
      title: "Web Development Pro 2025",
      description:
        "Build modern, responsive websites with this up-to-date course. Master HTML, CSS, JavaScript, and Next.js for real-world projects.",
      instructor: "Code&Coder",
      level: "Beginner",
      duration: "20h 30m",
      lessons: 125,
      price: "৳799",
      originalPrice: "₹2099",
      discount: "62% OFF",
      link: "/courses/web-development",
    },
    {
      image: "/image/game-dev.jpg",
      title: "Python Programming Essentials 2025",
      description:
        "Become a skilled Python developer with this beginner-friendly course. Learn Python fundamentals, automation, and more.",
      instructor: "Code&Coder",
      level: "Beginner",
      duration: "16h 45m",
      lessons: 95,
      price: "৳399",
      originalPrice: "₹1999",
      discount: "80% OFF",
      link: "/courses/python",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Explore Our Top Courses</h2>
      <p className={styles.description}>
        Start your learning journey with Code&Coder's expertly designed courses. From data science to web development, our hands-on programs help you gain skills for today's tech world.
      </p>
      <div className={styles.courseContainer}>
        {courses.map((course, index) => (
          <div key={index} className={styles.courseCard}>
            <img src={course.image} alt={course.title} className={styles.courseImage} />
            <h3 className={styles.courseTitle}>{course.title}</h3>
            <p className={styles.courseDescription}>{course.description}</p>
            <div className={styles.courseDetails}>
              <div className={styles.detailsLeft}>
                <p className={styles.detailItem}>
                  <FiUser className={styles.icon} /> {course.instructor}
                </p>
                <p className={styles.detailItem}>
                  <FiStar className={styles.icon} /> {course.level}
                </p>
              </div>
              <div className={styles.detailsRight}>
                <p className={styles.detailItem}>
                  <FiClock className={styles.icon} /> {course.duration}
                </p>
                <p className={styles.detailItem}>
                  <FiBook className={styles.icon} /> {course.lessons} lessons
                </p>
              </div>
            </div>
            <div className={styles.priceContainer}>
              <span className={styles.price}>{course.price}</span>
              <span className={styles.originalPrice}>{course.originalPrice}</span>
              <span className={styles.discount}>{course.discount}</span>
            </div>
            <Link href={course.link} className={styles.viewCourseButton}>
              View Course
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesOne;