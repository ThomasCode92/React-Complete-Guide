"use client";

import { useRef } from "react";
import styles from "./ImagePicker.module.css";

export default function ImagePicker({ label, name }) {
  const inputRef = useRef();

  function handlePickClick() {
    inputRef.current.click();
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <input
          ref={inputRef}
          className={styles.input}
          type="file"
          id={name}
          name={name}
          accept="image/*"
        />
        <button
          type="button"
          className={styles.button}
          onClick={handlePickClick}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
