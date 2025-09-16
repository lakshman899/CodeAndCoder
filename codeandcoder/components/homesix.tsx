"use client";

import React, { useState, useEffect } from "react";
import styles from "./homesix.module.css";

const HomeSix: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true); // disable button

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage(`✅ Thank you for subscribing, ${email}`);
        setEmail("");
      } else {
        setMessage("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("⚠️ Error connecting to server.");
    } finally {
      setIsSubmitting(false); // enable button again
    }
  };

  // Hide message after 3 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Subscribe to Our Newsletter</h2>
      <p className={styles.description}>
        Stay updated with the latest news, tutorials, and coding resources. Enter your email below and never miss an update.
      </p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button} disabled={isSubmitting}>
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </section>
  );
};

export default HomeSix;
