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

const MLAITutorials = () => {
  const topics = [
    {
      title: "Machine Learning & AI",
      languages: [
        { name: "Python", icon: SiPython, iconColor: "#3776AB", description: "Learn to build ML models with Python tutorials.", link: "/tutorials/python-ml-tutorials" },
        { name: "R", icon: SiR, iconColor: "#276DC3", description: "Master ML techniques with R tutorials.", link: "/tutorials/r-ml-tutorials" },
        { name: "Julia", icon: SiJulia, iconColor: "#389826", description: "Explore ML with Julia tutorials.", link: "/tutorials/julia-ml-tutorials" },
        { name: "C++", icon: SiCplusplus, iconColor: "#00599C", description: "Learn performance-critical ML with C++ tutorials.", link: "/tutorials/cpp-ml-tutorials" },
        { name: "Java", icon: SiOracle, iconColor: "#007396", description: "Master ML techniques with Java tutorials.", link: "/tutorials/java-ml-tutorials" },
        { name: "Scala", icon: SiScala, iconColor: "#DC322F", description: "Learn ML with Scala tutorials.", link: "/tutorials/scala-ml-tutorials" },
        { name: "Rust", icon: SiRust, iconColor: "#DEA584", description: "Explore ML with Rust tutorials.", link: "/tutorials/rust-ml-tutorials" },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Machine Learning & AI Tutorials</h2>
      <p className={styles.description}>
        Enhance your skills with tutorials for top programming languages.
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

export default MLAITutorials;