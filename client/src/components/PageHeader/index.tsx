import styles from "./PageHeader.module.scss";

function PageHeader() {
  return (
    <div className={styles.header}>
      <span className={styles.text}>Header</span>
    </div>
  );
}

export default PageHeader;
