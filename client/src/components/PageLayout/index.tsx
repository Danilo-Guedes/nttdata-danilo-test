import React from "react";
import styles from "./PageLayout.module.scss";
import PageHeader from "../PageHeader";
import PageFooter from "../PageFooter";

type PageLayoutProps = {
  children: React.ReactNode;
};

function PageLayout({ children }: PageLayoutProps): JSX.Element {
  return (
    <div className={styles.container}>
      <PageHeader />
      <main
       className={styles.main}
      >{children}</main>
      <PageFooter />
    </div>
  );
}

export default PageLayout;
