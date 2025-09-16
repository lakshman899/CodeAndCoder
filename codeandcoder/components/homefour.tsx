"use client";

import React from "react";
import style from "./homefour.module.css";
import { FaUserGraduate, FaRocket, FaLaptopCode, FaTags, FaBook, FaIndustry } from "react-icons/fa";

const HomeFour: React.FC = () => {
  const courses = [
    {
      icon: <FaUserGraduate className={style.icon} />,
      title: "For Starters",
      subtitle: "Begin your journey with beginner-friendly lessons crafted to make coding simple and enjoyable.",
    },
    {
      icon: <FaRocket className={style.icon} />,
      title: "Level Up Skills",
      subtitle: "Explore advanced tools, languages, and frameworks to sharpen your expertise.",
    },
    {
      icon: <FaLaptopCode className={style.icon} />,
      title: "Hands-On Learning",
      subtitle: "Work on practical projects that mirror real-life scenarios and strengthen problem-solving skills.",
    },
    {
      icon: <FaTags className={style.icon} />,
      title: "Student-Friendly Pricing",
      subtitle: "Get quality learning without breaking the bank — specially designed for learners and working professionals.",
    },
    {
      icon: <FaBook className={style.icon} />,
      title: "Learning Materials",
      subtitle: "Access guides, templates, and ready-to-use snippets to support your growth.",
    },
    {
      icon: <FaIndustry className={style.icon} />,
      title: "Tech Updates",
      subtitle: "Stay ahead with insights into the latest technologies and industry practices.",
    },
  ];

  return (
    <section className={style.container}>
      <h4 className={style.sectionTag}>Courses</h4>
      <h2 className={style.sectionTitle}>Build Your Coding Future with Our Programs</h2>
      <div className={style.grid}>
        {courses.map((course, index) => (
          <div key={index} className={style.card}>
            {course.icon}
            <h3 className={style.cardTitle}>{course.title}</h3>
            <p className={style.cardSubtitle}>{course.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeFour;
