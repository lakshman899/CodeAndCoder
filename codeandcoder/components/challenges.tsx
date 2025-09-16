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

const Challenges = () => {
  const topics = [
    {
      title: "Web Development",
      languages: [
        { name: "HTML", icon: SiHtml5, iconColor: "#E34F26", description: "Test your skills with HTML tag and structure challenges.", link: "/challenges/html-challenges" },
        { name: "CSS", icon: SiCss3, iconColor: "#1572B6", description: "Solve styling challenges with CSS layouts and properties.", link: "/challenges/css-challenges" },
        { name: "JavaScript", icon: SiJavascript, iconColor: "#F7DF1E", description: "Master JavaScript with coding challenges on functions and DOM.", link: "/challenges/javascript-challenges" },
        { name: "TypeScript", icon: SiTypescript, iconColor: "#3178C6", description: "Tackle TypeScript challenges with type safety and interfaces.", link: "/challenges/typescript-challenges" },
        { name: "Python", icon: SiPython, iconColor: "#3776AB", description: "Solve web-related Python challenges with Flask or Django.", link: "/challenges/python-challenges" },
        { name: "PHP", icon: SiPhp, iconColor: "#777BB4", description: "Test PHP skills with server-side scripting challenges.", link: "/challenges/php-challenges" },
        { name: "Ruby", icon: SiRuby, iconColor: "#CC342D", description: "Explore Ruby challenges with Rails or scripting tasks.", link: "/challenges/ruby-challenges" },
        { name: "Java", icon: SiOracle, iconColor: "#007396", description: "Solve Java challenges for web backends with Spring.", link: "/challenges/java-challenges" },
        { name: "Go", icon: SiGo, iconColor: "#00ADD8", description: "Tackle Go challenges for building fast web APIs.", link: "/challenges/go-challenges" },
        { name: "C#", icon: SiC, iconColor: "#9B4F96", description: "Test C# skills with ASP.NET web challenges.", link: "/challenges/csharp-challenges" },
      ],
    },
    {
      title: "App Development",
      languages: [
        { name: "Swift", icon: SiSwift, iconColor: "#F05138", description: "Build iOS app challenges with Swift.", link: "/challenges/swift-challenges" },
        { name: "Kotlin", icon: SiKotlin, iconColor: "#7F52FF", description: "Solve Android app challenges using Kotlin.", link: "/challenges/kotlin-challenges" },
        { name: "Java", icon: SiOracle, iconColor: "#007396", description: "Tackle Android app challenges with Java.", link: "/challenges/java-app-challenges" },
        { name: "JavaScript/TypeScript (React Native)", icon: SiReact, iconColor: "#61DAFB", description: "Build mobile apps with React Native challenges.", link: "/challenges/react-native-challenges" },
        { name: "Dart (Flutter)", icon: SiDart, iconColor: "#0175C2", description: "Solve Flutter app challenges with Dart.", link: "/challenges/dart-challenges" },
        { name: "C# (Xamarin)", icon: SiC, iconColor: "#178600", description: "Test Xamarin app challenges with C#.", link: "/challenges/xamarin-challenges" },
      ],
    },
    {
      title: "Desktop App Development",
      languages: [
        { name: "C# (.NET)", icon: SiC, iconColor: "#9B4F96", description: "Build desktop apps with C# and .NET challenges.", link: "/challenges/csharp-desktop-challenges" },
        { name: "Python (PyQt/Tkinter)", icon: SiPython, iconColor: "#3776AB", description: "Solve desktop GUI challenges with Python.", link: "/challenges/python-desktop-challenges" },
        { name: "Java (JavaFX)", icon: SiOracle, iconColor: "#007396", description: "Tackle JavaFX challenges for desktop apps.", link: "/challenges/javafx-challenges" },
        { name: "JavaScript/TypeScript (Electron)", icon: FaLaptopCode, iconColor: "#47848F", description: "Build Electron app challenges with JavaScript.", link: "/challenges/electron-challenges" },
        { name: "C++ (Qt)", icon: SiCplusplus, iconColor: "#00599C", description: "Solve C++ Qt challenges for desktop apps.", link: "/challenges/cpp-qt-challenges" },
        { name: "Rust", icon: SiRust, iconColor: "#DEA584", description: "Test Rust skills with desktop app challenges.", link: "/challenges/rust-challenges" },
      ],
    },
    {
      title: "Data Science",
      languages: [
        { name: "Python", icon: SiPython, iconColor: "#3776AB", description: "Analyze datasets with Python challenges.", link: "/challenges/python-data-challenges" },
        { name: "R", icon: SiR, iconColor: "#276DC3", description: "Solve statistical challenges with R.", link: "/challenges/r-challenges" },
        { name: "SQL", icon: SiPostgresql, iconColor: "#F29111", description: "Test your skills with SQL query challenges.", link: "/challenges/sql-challenges" },
        { name: "Julia", icon: SiJulia, iconColor: "#389826", description: "Tackle data analysis challenges with Julia.", link: "/challenges/julia-challenges" },
        { name: "Scala", icon: SiScala, iconColor: "#DC322F", description: "Solve big data challenges with Scala.", link: "/challenges/scala-challenges" },
      ],
    },
    {
      title: "Machine Learning & AI",
      languages: [
        { name: "Python", icon: SiPython, iconColor: "#3776AB", description: "Build ML models with Python challenges.", link: "/challenges/python-ml-challenges" },
        { name: "R", icon: SiR, iconColor: "#276DC3", description: "Solve ML challenges with R.", link: "/challenges/r-ml-challenges" },
        { name: "Julia", icon: SiJulia, iconColor: "#389826", description: "Tackle ML challenges with Julia.", link: "/challenges/julia-ml-challenges" },
        { name: "C++", icon: SiCplusplus, iconColor: "#00599C", description: "Test performance-critical ML challenges with C++.", link: "/challenges/cpp-ml-challenges" },
        { name: "Java", icon: SiOracle, iconColor: "#007396", description: "Solve ML challenges with Java.", link: "/challenges/java-ml-challenges" },
        { name: "Scala", icon: SiScala, iconColor: "#DC322F", description: "Tackle ML challenges with Scala.", link: "/challenges/scala-ml-challenges" },
        { name: "Rust", icon: SiRust, iconColor: "#DEA584", description: "Test ML challenges with Rust.", link: "/challenges/rust-ml-challenges" },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Coding Challenges</h2>
      <p className={styles.description}>
        Sharpen your skills with challenges for top programming languages.
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
                  <h4 className={styles.challengeTitle}>{language.name} Challenges</h4>
                  <p className={styles.challengeDescription}>{language.description}</p>
                  <Link href={language.link} className={styles.startChallengeButton}>
                    Start Challenge
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

export default Challenges;