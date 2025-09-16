"use client";

import React from "react";
import style from "./homefive.module.css";
import { FaQuoteLeft } from "react-icons/fa";

const HomeFive: React.FC = () => {
  const testimonials = [
    {
      name: "Anik Hajong",
      role: "App Developer",
      text: "This platform not only helped me sharpen my coding skills but also transformed the way I approach problem-solving. The structured learning path, practical projects, and real-world examples gave me the confidence to build fully functional applications on my own. It’s more than just learning—it’s about gaining the skills and mindset needed to succeed as a developer in today’s fast-growing tech industry.",
    },
    {
      name: "Aaditya Hajong",
      role: "Web Developer",
      text: "The courses are thoughtfully structured and easy to follow, making it simple for learners at any level to progress smoothly. Each module includes practical exercises and real-world examples, which allowed me to apply the concepts immediately. Thanks to this approach, I gained hands-on experience and valuable insights that I now confidently implement in my own projects, boosting both my skills and my problem-solving abilities.",
    },
  ];

  return (
    <section className={style.container}>
      <h4 className={style.sectionTag}>Testimonials</h4>
      <h2 className={style.sectionTitle}>What our learners say</h2>

      <div className={style.grid}>
        {testimonials.map((item, index) => (
          <div key={index} className={style.card}>
            <FaQuoteLeft className={style.icon} />
            <p className={style.text}>"{item.text}"</p>
            <div className={style.author}>
              <h3 className={style.name}>{item.name}</h3>
              <span className={style.role}>{item.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeFive;
