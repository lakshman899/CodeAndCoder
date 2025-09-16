"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMail, FiX, FiMenu } from "react-icons/fi";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import styles from "./navbar.module.css";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Tutorials", href: "/tutorials" },
    { label: "Challenges", href: "/challenges" },
    { label: "Apps", href: "/apps" },
    { label: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.brand}>
          Code&Coder
        </Link>

        <ul className={styles.desktopMenu}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <div className={styles.desktopActions}>
          <a href="mailto:lakshmanchandra899@gmail.com" className={styles.desktopMail}>
            <FiMail size={22} />
          </a>
          <SignedOut>
            <SignInButton>
              <button className={styles.signInButton}>
                <span>Sign In</span>
              </button>
            </SignInButton>
            <SignUpButton>
              <button className={styles.signUpButton}>
                <span>Sign Up</span>
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        <div className={styles.mobileToggle}>
          <a href="mailto:lakshmanchandra899@gmail.com" className={styles.mobileMailIcon}>
            <FiMail size={22} />
          </a>
          <button onClick={toggleMenu} className={styles.mobileMenuButton}>
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
        <div className={styles.mobileHeader}>
          <Link href="/" className={styles.brand} onClick={closeMenu}>
            Code&Coder
          </Link>
          <button onClick={closeMenu} className={styles.closeButton}>
            <FiX size={28} />
          </button>
        </div>

        <ul className={styles.mobileMenuList}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
          
          <SignedIn>
            <li className={styles.mobileProfileItem}>
              <UserButton afterSignOutUrl="/" />
            </li>
          </SignedIn>
          
          <SignedOut>
            <li>
              <SignInButton>
                <button className={styles.mobileSignInButton} onClick={closeMenu}>
                  <span>Sign In</span>
                </button>
              </SignInButton>
            </li>
            <li>
              <SignUpButton>
                <button className={styles.mobileSignUpButton} onClick={closeMenu}>
                  <span>Sign Up</span>
                </button>
              </SignUpButton>
            </li>
          </SignedOut>
        </ul>
      </div>

      {isMenuOpen && <div className={styles.overlay} onClick={closeMenu} />}
    </nav>
  );
};

export default Navbar;