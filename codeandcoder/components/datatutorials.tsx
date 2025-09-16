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

const DataTutorials = () => {
  const topics = [
    {
      title: "Data Science",
      languages: [
        { name: "Python", icon: SiPython, iconColor: "#3776AB", description: "Learn to analyze datasets with Python tutorials.", link: "/tutorials/python-data-tutorials" },
        { name: "R", icon: SiR, iconColor: "#276DC3", description: "Master statistical analysis with R tutorials.", link: "/tutorials/r-tutorials" },
        { name: "SQL", icon: SiPostgresql, iconColor: "#F29111", description: "Learn to write SQL queries with tutorials.", link: "/tutorials/sql-tutorials" },
        { name: "Julia", icon: SiJulia, iconColor: "#389826", description: "Explore data analysis with Julia tutorials.", link: "/tutorials/julia-tutorials" },
        { name: "Scala", icon: SiScala, iconColor: "#DC322F", description: "Learn big data processing with Scala tutorials.", link: "/tutorials/scala-tutorials" },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Data Science Tutorials</h2>
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

export default DataTutorials;