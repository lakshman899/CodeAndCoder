"use client";

import React, { useEffect, useState } from "react";
import style from "./homethree.module.css";

const HomeThree: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const companies: string[] = [
    "amazon",
    "google",
    "microsoft",
    "goldman",
    "paypal",
    "samsung",
    "ey",
    "hitachi",
    "jpmorgan",
    "ibm",
    "dell",
    "deloitte",
  ];

  return (
    <section className={style.container}>
      <h2 className={`${style.title} ${isVisible ? style.animate : ""}`}>
        Helped students achieve their dream job at
      </h2>
      <div className={`${style.companyGrid} ${isVisible ? style.animate : ""}`}>
        {companies.map((company, index) => (
          <div key={index} className={style.companyCard}>
            <img
              src={`/image/${company}-logo.png`}
              alt={`${company} Logo`}
              className={style.companyIcon}
            />
          </div>
        ))}
      </div>
      <p className={style.moreText}>+ many more companies</p>
    </section>
  );
};

export default HomeThree;
