import styles from "./PageHeader.module.scss";
import { Link } from "react-router-dom";
import { Icon } from "@ui5/webcomponents-react"
import "@ui5/webcomponents-icons/dist/home.js";
import { GithubIcon, LinkedinIcon } from "lucide-react";

function PageHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.menuContainer}>

      <Link to="/" className={styles.link} >
        <Icon name="search" className={styles.icon}/><span className={styles.menuText}>Home</span>
      </Link>
      <Link to="/favoritos" className={styles.link} >
        <Icon name="heart" className={styles.icon}/><span className={styles.menuText}>Favoritos</span>
      </Link>
      </div>
      <div className={styles.titleContainer}>

      <span className={styles.title}>Teste Danilo FullStack NTT Data</span>
      </div>
      <div className={styles.socialMedia}>
      <a
        href="https://www.linkedin.com/in/danilo-guedes-dev"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinIcon color="#0070f2" />
      </a>
      <a
        href="https://www.github.com/danilo-guedes"
        target="_blank"
        rel="noreferrer"
      >
        <GithubIcon color="#0070f2"/>
      </a>
      </div>
    </div>
  );
}

export default PageHeader;
