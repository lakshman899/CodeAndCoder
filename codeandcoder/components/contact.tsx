"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import styles from "./contact.module.css";

// Dynamically import ReCAPTCHA to avoid SSR issues
const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), { ssr: false });

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRecaptcha = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!recaptchaToken) {
      setStatus("Please verify you are not a robot.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setRecaptchaToken(null);
      } else {
        setStatus(`Failed to send message: ${result.error || "Unknown error"}`);
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      setStatus(`An error occurred: ${error.message || "Please try again later."}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h2 className={styles.title}>Get in Touch</h2>
        <p className={styles.description}>
          We're here to answer your questions, hear your feedback, or explore collaboration opportunities. Reach out to us anytime!
        </p>
        <p className={styles.email}>
          Email us at{" "}
          <Link href="mailto:lakshmanchandra899@gmail.com" className={styles.emailLink}>
            lakshmanchandra899@gmail.com
          </Link>{" "}
          for any inquiries or support.
        </p>
        <img src="/image/contact.jpg" alt="Contact" className={styles.contactImage} />
      </div>
      <div className={styles.rightSection}>
        <h3 className={styles.formTitle}>Contact Form</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="Enter your full name"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject" className={styles.label}>Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="Enter the subject"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.textarea}
              placeholder="Type your message here"
            />
          </div>
          <div className={styles.recaptcha}>
            <ReCAPTCHA
              sitekey="6LfPLckrAAAAAOATYhVpMRO9Z0vNc2Ld4JRK9sec"
              onChange={handleRecaptcha}
            />
          </div>
          <button
            type="submit"
            className={`${styles.submitButton} ${isSubmitting ? styles.sending : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {status && <p className={styles.status}>{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;