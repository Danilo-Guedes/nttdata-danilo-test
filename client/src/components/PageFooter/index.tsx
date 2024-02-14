import { LinkedinIcon, GithubIcon } from "lucide-react";

import styles from "./PageFooter.module.scss";

function PageFooter() {
  return (
    <footer className={styles.container}>
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
    </footer>
  );
}

export default PageFooter;
