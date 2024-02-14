import styles from "./PageHeader.module.scss";
import { Link } from "react-router-dom";
import { Icon } from "@ui5/webcomponents-react"
import "@ui5/webcomponents-icons/dist/home.js";

function PageHeader() {
  return (
    <div className={styles.header}>
      <Link to="/" >
        <Icon name="home" className={styles.icon}/><span className={styles.menuText}>Home</span>
      </Link>
      <span className={styles.title}>Teste FullStack NTT DATA</span>
    </div>
  );
}

export default PageHeader;
