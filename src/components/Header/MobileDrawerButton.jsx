"use client";
import React from "react";
import styles from "./MobileDrawerButton.module.css"; // ✅ module import

const MobileDrawerButton = ({ isOpen, onClick, scrolled }) => {
  return (
   <div
  id="hamburger"
  onClick={onClick}
  style={{
    "--burger-color": scrolled ? "#fff" : "#292A76",
  }}
  className={`
    ${styles.hamburglar}
    ${isOpen ? styles["is-open"] : styles["is-closed"]}
  `}
>

      {/* Burger Icon */}
      <div className={styles["burger-icon"]} >
        <div className={styles["burger-container"]}>
          <span className={styles["burger-bun-top"]}></span>
          <span className={styles["burger-filling"]}></span>
          <span className={styles["burger-bun-bot"]}></span>
        </div>
      </div>

      {/* Circular Ring */}
      <div className={styles["burger-ring"]}>
        <svg className={styles["svg-ring"]}>
          <path
            className={styles.path}
            fill="none"
            stroke={scrolled ? "#fff" : "#292A76"} 
            strokeMiterlimit="10"
            strokeWidth="4"
            d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2"
          />
        </svg>
      </div>

      {/* Animated Path */}
      <div className={styles["path-burger"]}>
        <div className={styles["animate-path"]}>
          <div className={styles["path-rotation"]}></div>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawerButton;
