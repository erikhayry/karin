"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [showImage, setShowImage] = useState(false);
  const [togglePic, settogglePic] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [bgColor, setBgColor] = useState("white");

  const colors = ["red", "blue", "yellow"];
  const [colorIndex, setColorIndex] = useState(0);

  function handleShowImage() {
    setShowImage(true);
  }

  function handleClick() {
    settogglePic(!togglePic);
  }

  function handleRotateLeft() {
    setRotation(rotation - 90);
  }

  function handleRotateRight() {
    setRotation(rotation + 90);
  }

  function handleChangeColor() {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    setBgColor(colors[colorIndex]);
  }

  return (
    <div className={styles.page} style={{ backgroundColor: bgColor }}>
      <main className={styles.main}>
        {!showImage ? (
          <button onClick={handleShowImage}>Visa Bild</button>
        ) : (
          <>
            <Image
              src={togglePic ? "/Karin_Erlandsson_01.jpg" : "/Karin_Erlandsson_02.jpg"}
              alt="karins hårtyper"
              width={200}
              height={200}
              priority
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: 'transform 0.5s ease',
              }}
            />
            <div className={styles.ctas}>
              <button onClick={handleClick}>
                {togglePic ? "Långt Hår" : "Kort Hår"}
              </button>
              <button onClick={handleRotateLeft}>Snurra Vänster</button>
              <button onClick={handleRotateRight}>Snurra Höger</button>
              <button onClick={handleChangeColor}>Ändra Färg</button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
