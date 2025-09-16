"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import style from "./home.module.css";

const Home = () => {
  const texts = ['Web Development', 'App Development', 'Data Sciences', 'AI & ML'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure component is mounted on client
    const interval = setInterval(() => {
      setIsExiting(true); // Start exit animation
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsExiting(false); // Start entry animation for new text
      }, 500); // Match the duration of the slideOut animation
    }, 2500); // Total cycle: 500ms (exit) + 2000ms (display) = 2500ms
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  if (!isMounted) {
    return null; // Prevent server-client mismatch by skipping initial render
  }

  // Split the current text into individual letters
  const currentText = texts[currentTextIndex];
  const letters = currentText.split('');

  return (
    <div className={style.container}>
      <p className={style.welcome}>Welcome to Code&Coder</p>
      <h3 className={style.mainHeading}>
        <b style={{ color: 'rgba(182, 247, 3, 1)' }}>Master Coding the Smart Way</b><br />
        Learn{' '}
        <span className={`${style.rotatingText} ${isExiting ? style.exiting : ''}`}>
          {letters.map((letter, index) => (
            <span key={`${letter}-${index}`}>{letter}</span>
          ))}
        </span>
      </h3>
      <p className={style.description}>
        At <b style={{ color: 'rgba(182, 247, 3, 1)' }}><i>Code&Coder,</i></b> we’re dedicated to helping you learn programming from the ground up! Whether you're a beginner or looking to level up, our carefully crafted courses make coding accessible, fun, and effective. Confused about where to start? No worries! Dive into our wide range of programming courses, designed to suit all skill levels. Find the perfect course for you and start learning today—completely free
      </p>
      <div className={style.buttonContainer}>
        <Link href="/tutorials" className={style.actionButton} aria-label="Explore Tutorials">
          Explore Tutorials
        </Link>
        <Link href="/contact" className={style.contactButton} aria-label="Contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Home;