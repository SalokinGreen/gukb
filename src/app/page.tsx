import Image from "next/image";
import styles from "./page.module.css";
import ChapterElement from "@/components/chapter-element";

import { IoFlash, IoEyeSharp } from "react-icons/io5";
import { IoIosStats, IoMdSettings } from "react-icons/io";

import {
  FaPenNib,
  FaRobot,
  FaBookOpen,
  FaBook,
  FaBrain,
  FaUser,
} from "react-icons/fa";
import { SiAutohotkey } from "react-icons/si";
import { ImBooks } from "react-icons/im";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>UKB!</h1>
        <div className={styles.description}>
          <p>
            Welcome to the <b>Unofficial NovelAI Knowledge Base</b>.{" "}
            <i>NovelAI is a living project.</i>
          </p>
        </div>
        <div className={styles.groupArea}>
          <div className={styles.groupTitle}>Getting Started</div>
          <div className={styles.groupDescription}>Jump right in!</div>
          <div className={`${styles.groupGrid} ${styles.twoColumns}`}>
            <ChapterElement
              title="Quick Start"
              icon={
                <IoFlash size={48} style={{ width: "100%", height: "100%" }} />
              }
            />
            <ChapterElement
              title="First Story"
              icon={
                <FaPenNib size={48} style={{ width: "100%", height: "100%" }} />
              }
            />
          </div>
        </div>
        <div className={styles.groupArea}>
          <div className={styles.groupTitle}>Details</div>
          <div className={styles.groupDescription}>Need to know more?</div>
          <div className={`${styles.groupGrid} ${styles.threeColumns}`}>
            <ChapterElement
              title="Shortcuts"
              icon={
                <SiAutohotkey
                  size={48}
                  style={{ width: "100%", height: "100%" }}
                />
              }
            />
            <ChapterElement
              title="GPT?"
              icon={
                <FaRobot size={48} style={{ width: "100%", height: "100%" }} />
              }
            />
            <ChapterElement
              title="Stories"
              icon={
                <ImBooks size={48} style={{ width: "100%", height: "100%" }} />
              }
            />
          </div>
        </div>
        <div className={styles.groupArea}>
          <div className={styles.groupTitle}>Context</div>
          <div className={styles.groupDescription}>
            How text is managed and read by NovelAI and its models.
          </div>
          <div className={`${styles.groupGrid} ${styles.threeColumns}`}>
            <ChapterElement
              title="Context"
              icon={
                <IoEyeSharp
                  size={48}
                  style={{ width: "100%", height: "100%" }}
                />
              }
            />
            <ChapterElement
              title="Lorebook"
              icon={
                <FaBookOpen
                  size={48}
                  style={{ width: "100%", height: "100%" }}
                />
              }
            />
            <ChapterElement
              title="Attributes"
              icon={
                <IoIosStats
                  size={48}
                  style={{ width: "100%", height: "100%" }}
                />
              }
            />
          </div>
        </div>
        <div className={styles.groupArea}>
          <div className={styles.groupTitle}>Settings</div>
          <div className={styles.groupDescription}>
            Customizing your experience.
          </div>
          <div className={`${styles.groupGrid}`}>
            <ChapterElement
              title="Story Settings"
              icon={
                <FaBook size={48} style={{ width: "100%", height: "100%" }} />
              }
            />
            <ChapterElement
              title="Advanced Settings"
              icon={
                <FaBrain size={48} style={{ width: "100%", height: "100%" }} />
              }
            />
            <ChapterElement
              title="Generation Settings"
              icon={
                <IoMdSettings
                  size={48}
                  style={{ width: "100%", height: "100%" }}
                />
              }
            />
            <ChapterElement
              title="User Settings"
              icon={
                <FaUser size={48} style={{ width: "100%", height: "100%" }} />
              }
            />
          </div>
        </div>
        <footer className={styles.footer}>
          <p className={styles.footerDisclaimer}>
            Information may become out of date, or inaccurate. While some
            content is reviewed by developers, this is NOT an official resource.
            NovelAI is not accountable for any content on this site.
          </p>
        </footer>
      </main>
    </div>
  );
}
