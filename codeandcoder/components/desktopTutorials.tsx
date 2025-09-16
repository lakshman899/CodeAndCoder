"use client";

import React from "react";
import Link from "next/link";
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiPython, SiPhp, SiRuby, SiOracle, SiGo, SiC,
  SiSwift, SiKotlin, SiDart, SiCplusplus, SiRust, SiR, SiPostgresql, SiJulia, SiScala,
  SiReact
} from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import styles from "./challenges.module.css";

const Tutorials = () => {
  const topics = [
    {
      title: "Desktop App Development",
      languages: [
        { name: "C# (.NET)", icon: SiC, iconColor: "#9B4F96", description: "Learn to build desktop apps with C# and .NET tutorials.", link: "/tutorials/csharp-desktop-tutorials" },
        { name: "Python (PyQt/Tkinter)", icon: SiPython, iconColor: "#3776AB", description: "Explore desktop GUI development with Python tutorials.", link: "/tutorials/python-desktop-tutorials" },
        { name: "Java (JavaFX)", icon: SiOracle, iconColor: "#007396", description: "Master JavaFX for desktop apps through tutorials.", link: "/tutorials/javafx-tutorials" },
        { name: "JavaScript/TypeScript (Electron)", icon: FaLaptopCode, iconColor: "#47848F", description: "Learn Electron app development with JavaScript tutorials.", link: "/tutorials/electron-tutorials" },
        { name: "C++ (Qt)", icon: SiCplusplus, iconColor: "#00599C", description: "Discover C++ Qt for desktop apps with tutorials.", link: "/tutorials/cpp-qt-tutorials" },
        { name: "Rust", icon: SiRust, iconColor: "#DEA584", description: "Build desktop apps with Rust through guided tutorials.", link: "/tutorials/rust-tutorials" },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Coding Tutorials</h2>
      <p className={styles.description}>
        Sharpen your skills with tutorials for top programming languages.
      </p>
      {topics.map((topic, index) => (
        <div key={index} className={styles.topicSection}>
          <h3 className={styles.topicTitle}>{topic.title}</h3>
          <div className={styles.challengeContainer}>
            {topic.languages.map((language, langIndex) => {
              const IconComponent = language.icon;
              return (
                <div key={langIndex} className={styles.challengeCard}>
                  <IconComponent className={styles.challengeIcon} style={{ color: language.iconColor }} />
                  <h4 className={styles.challengeTitle}>{language.name} Tutorials</h4>
                  <p className={styles.challengeDescription}>{language.description}</p>
                  <Link href={language.link} className={styles.startChallengeButton}>
                    Start Tutorial
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tutorials;