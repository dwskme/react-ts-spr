import React from "react";
import styles from "./ChooseAndPlay.module.css";

export default function ChooseAndPlay() {
  return (
    <>
      <div className={styles.choiceBtnCtn}>
        <button className={styles.playBtn}>Play</button>
      </div>
    </>
  );
}
