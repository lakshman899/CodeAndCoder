"use client";

import React from "react";
import Link from "next/link";
import { SiSwift, SiKotlin, SiOracle, SiReact, SiDart, SiC } from "react-icons/si";
import styles from "../../../CodeAndCoder/codeandcoder/components/apptutorials.module.css";

const AppTutorials = () => {
  const topics = [
    {
      title: "App Development",
      languages: [
        { name: "Swift", icon: SiSwift, iconColor: "#F05138", description: "Learn iOS app development with Swift tutorials.", link: "/webdev/swift-challenges" },
        { name: "Kotlin", icon: SiKotlin, iconColor: "#7F52FF", description: "Master Android app development with Kotlin tutorials.", link: "/webdev/kotlin-challenges" },
        { name: "Java", icon: SiOracle, iconColor: "#007396", description: "Explore Android app development with Java tutorials.", link: "/webdev/java-app-challenges" },
        { name: "React Native", icon: SiReact, iconColor: "#61DAFB", description: "Build mobile apps with React Native tutorials.", link: "/webdev/react-native-challenges" },
        { name: "Dart (Flutter)", icon: SiDart, iconColor: "#0175C2", description: "Learn Flutter app development with Dart tutorials.", link: "/webdev/dart-challenges" },
        { name: "C# (Xamarin)", icon: SiC, iconColor: "#178600", description: "Explore Xamarin app development with C# tutorials.", link: "/webdev/xamarin-challenges" },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>App Development Tutorials</h2>
      <p className={styles.description}>
        Master app development with hands-on tutorials for top programming languages.
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

export default AppTutorials;