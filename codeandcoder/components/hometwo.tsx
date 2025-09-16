"use client";

import React from "react";
import style from "./hometwo.module.css";

const HomeSecond = () => {
  const boxes = [
    {
      image: "/image/web-dev.jpg",
      title: "Web Development",
      subtitle: "Learn HTML, CSS, JavaScript, and modern frameworks to build responsive websites and web applications.",
    },
    {
      image: "/image/app-dev.jpg",
      title: "App Development",
      subtitle: "Master React Native, Flutter, and Swift to create powerful mobile apps for iOS and Android.",
    },
    {
      image: "/image/game-dev.jpg",
      title: "Video Game Development",
      subtitle: "Dive into Unity, Unreal Engine, and C++ to build immersive games for consoles, PC, and mobile.",
    },
  ];

  return (
    <div className={style.container}>
      <h2 className={style.title}>Continue Coding Smarter with Code&Coder</h2>
      <p className={style.description}>
        Dive deeper into your coding journey with <span className={style.brand}>Code&Coder</span>’s hands-on, real-world projects. Our expertly crafted tutorials in Web Development, App Development, and Video Game Development guide you from beginner to pro, helping you build skills that stand out in real-world applications.
      </p>
      <div className={style.boxContainer}>
        {boxes.map((box, index) => (
          <div key={index} className={style.box}>
            <img src={box.image} alt={box.title} className={style.boxImage} />
            <h3 className={style.boxTitle}>{box.title}</h3>
            <p className={style.boxSubtitle}>{box.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSecond;