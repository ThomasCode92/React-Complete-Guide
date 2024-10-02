"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import styles from "./ImagePicker.module.css";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const inputRef = useRef();

  function handlePickClick() {
    inputRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) return setPickedImage(null);

    const reader = new FileReader();
    reader.onload = () => {
      setPickedImage(reader.result);
    };

    reader.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && <Image src={pickedImage} alt="Picked image" fill />}
        </div>
        <input
          ref={inputRef}
          className={styles.input}
          type="file"
          id={name}
          name={name}
          required
          accept="image/*"
          onChange={handleImageChange}
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
