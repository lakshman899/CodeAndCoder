"use client";

import React from "react";
import Link from "next/link";
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiPython, SiPhp, SiRuby, SiOracle, SiGo, SiC
} from "react-icons/si";
import styles from "../../codeandcoder/components/webtutorials.module.css";

const WebTutorials = () => {
  const topics = [
    {
      title: "Web Development",
      languages: [
        { name: "HTML", icon: SiHtml5, iconColor: "#E34F26", description: "Learn HTML with tutorials on tags and structure.", link: "/webdev/html-challenges" },
        { name: "CSS", icon: SiCss3, iconColor: "#1572B6", description: "Master CSS with tutorials on layouts and styling.", link: "/webdev/css-challenges" },
        { name: "JavaScript", icon: SiJavascript, iconColor: "#F7DF1E", description: "Explore JavaScript tutorials on functions and DOM manipulation.", link: "/webdev/javascript-challenges" },
        { name: "TypeScript", icon: SiTypescript, iconColor: "#3178C6", description: "Learn TypeScript with tutorials on type safety and interfaces.", link: "/webdev/typescript-challenges" },
        { name: "Python", icon: SiPython, iconColor: "#3776AB", description: "Discover web development with Python using Flask or Django.", link: "/webdev/python-challenges" },
        { name: "PHP", icon: SiPhp, iconColor: "#777BB4", description: "Learn PHP with tutorials on server-side scripting.", link: "/webdev/php-challenges" },
        { name: "Ruby", icon: SiRuby, iconColor: "#CC342D", description: "Explore Ruby tutorials with Rails or scripting.", link: "/webdev/ruby-challenges" },
        { name: "Java", icon: SiOracle, iconColor: "#007396", description: "Master Java for web backends with Spring tutorials.", link: "/webdev/java-challenges" },
        { name: "Go", icon: SiGo, iconColor: "#00ADD8", description: "Learn Go with tutorials for building fast web APIs.", link: "/webdev/go-challenges" },
        { name: "C#", icon: SiC, iconColor: "#9B4F96", description: "Explore C# tutorials for ASP.NET web development.", link: "/webdev/csharp-challenges" },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Web Development Tutorials</h2>
      <p className={styles.description}>
        Master web development with hands-on tutorials for top programming languages.
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
                    Explore Tutorials
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

export default WebTutorials;