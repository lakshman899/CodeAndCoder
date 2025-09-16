"use client";

import React from "react";
import Link from "next/link";
import styles from "../../codeandcoder/components/tutorials.module.css";

const Tutorials = () => {
  const topics = [
    {
      image: "/image/web-dev.jpg",
      title: "Web Development",
      languages: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "PHP", "Ruby", "Java", "Go", "C#"],
      description: "Build dynamic and responsive websites with modern tools and frameworks.",
      link: "/webdev/web-development", // Updated link
    },
    {
      image: "/image/app-dev.jpg",
      title: "App Development",
      languages: ["Swift", "Kotlin", "Java", "React Native", "Dart", "C#"],
      description: "Create powerful mobile apps for iOS and Android platforms.",
      link: "/webdev/app-development", // Updated link
    },
    {
      image: "/image/desktop-app.jpg",
      title: "Desktop App Development",
      languages: ["C# (.NET)", "Python (PyQt/Tkinter)", "Java (JavaFX)", "JavaScript/TypeScript (Electron)", "C++ (Qt)", "Rust"],
      description: "Develop cross-platform desktop applications with high performance.",
      link: "/webdev/desktop-app-development", // Updated link
    },
    {
      image: "/image/data-science.jpg",
      title: "Data Science",
      languages: ["Python", "R", "SQL", "Julia", "Scala"],
      description: "Analyze and visualize data to uncover insights and trends.",
      link: "/webdev/data-science", // Updated link
    },
    {
      image: "/image/ml-ai.jpg",
      title: "Machine Learning & AI",
      languages: ["Python", "R", "Julia", "C++", "Java", "Scala", "Rust"],
      description: "Build intelligent systems with machine learning and AI techniques.",
      link: "/webdev/ml-ai", // Updated link
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Explore Programming Tutorials</h2>
      <p className={styles.description}>
        Master the skills you need with Code&Coder’s hands-on tutorials. Learn the top programming languages for Web Development, App Development, Desktop Apps, Data Science, and ML & AI.
      </p>
      <div className={styles.tutorialContainer}>
        {topics.map((topic, index) => (
          <div key={index} className={styles.tutorialCard}>
            <img
              src={topic.image}
              alt={`${topic.title} tutorial`}
              className={styles.tutorialImage}
            />
            <h3 className={styles.tutorialTitle}>{topic.title}</h3>
            <p className={styles.tutorialDescription}>{topic.description}</p>
            <div className={styles.languagesContainer}>
              <h4 className={styles.languagesTitle}>Languages & Tools</h4>
              <ul className={styles.languagesList}>
                {topic.languages.map((language, idx) => (
                  <li key={idx} className={styles.languageItem}>{language}</li>
                ))}
              </ul>
            </div>
            <Link
              href={topic.link}
              className={styles.viewTutorialButton}
              aria-label={`Explore ${topic.title} tutorials`}
            >
              Explore Tutorials
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;