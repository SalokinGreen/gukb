import React from "react";
import styles from "./components.module.css";

const ChapterElement: React.FC<{ title: string; icon: React.ReactNode }> = ({
  title,
  icon,
}) => {
  return (
    <div className={styles.chapterArea}>
      <div className={styles.chapterIcon}>{icon}</div>
      <div className={styles.chapterTitle}>{title}</div>
    </div>
  );
};

export default ChapterElement;
