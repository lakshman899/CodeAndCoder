"use client";

import React, { useRef } from "react";
import { FaAndroid, FaAppStore, FaApple, FaStar } from "react-icons/fa";
import style from "./apps.module.css";

const AppsOne: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const apps = [
    { icon: <FaAndroid className={style.icon} />, name: "App1", rating: 4.5 },
    { icon: <FaAppStore className={style.icon} />, name: "App2", rating: 4.8 },
    { icon: <FaApple className={style.icon} />, name: "App3", rating: 4.6 },
    { icon: <FaAndroid className={style.icon} />, name: "App4", rating: 4.5 },
    { icon: <FaAppStore className={style.icon} />, name: "App5", rating: 4.8 },
    { icon: <FaApple className={style.icon} />, name: "App6", rating: 4.6 },
    { icon: <FaAndroid className={style.icon} />, name: "App7", rating: 4.5 },
    { icon: <FaAppStore className={style.icon} />, name: "App8", rating: 4.8 },
    { icon: <FaApple className={style.icon} />, name: "App9", rating: 4.6 },
  ];

  return (
    <section className={style.container}>
      <h2 className={style.title}>Learning Apps</h2>
      <div className={style.grid} ref={scrollRef}>
        {apps.map((app, index) => (
          <div key={index} className={style.card}>
            <div className={style.iconContainer}>{app.icon}</div>
            <div className={style.textContainer}>
              <p className={style.cardName}>{app.name}</p>
              <p className={style.codeCoder}>Code&Coder</p>
              <div className={style.rating}>
                <FaStar className={style.starIcon} />
                <span className={style.ratingNumber}>{app.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppsOne;