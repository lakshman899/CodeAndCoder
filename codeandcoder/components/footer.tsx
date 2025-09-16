"use client";

import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import styles from "./footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Main</h3>
          <ul className={styles.footerList}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Learn</h3>
          <ul className={styles.footerList}>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/tutorials">Tutorials</Link>
            </li>
            <li>
              <Link href="/apps">Apps</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Legal</h3>
          <ul className={styles.footerList}>
            <li>
              <Link href="/terms">Terms</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            <li>
              <Link href="/refund">Refund</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Social</h3>
          <ul className={styles.footerList}>
            <li>
              <a href="https://web.facebook.com/lakshmanhajong11" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={18} className={styles.icon} /> Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/lakshman_hajong/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={18} className={styles.icon} /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>Copyright © Code&Coder. Made in Bangladesh.</p>
      </div>
    </footer>
  );
};

export default Footer;