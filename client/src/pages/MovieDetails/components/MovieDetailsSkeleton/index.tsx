import Skeleton from "react-loading-skeleton";

import styles from "./MovieDetailsSkeleton.module.scss";

function MovieDetailsSkeleton() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.leftContainer}>
        <Skeleton height={50} width={600} />
        <Skeleton height={50} width={180} style={{ marginBottom: "2rem" }} />
        <Skeleton height={60} width={600} style={{ marginBottom: "1rem" }} />
        <Skeleton
          count={5}
          height={25}
          width={600}
          style={{ marginBottom: "1rem" }}
        />
        <Skeleton
          height={30}
          width={180}
          style={{ marginTop: "1rem", borderRadius: "0.3rem" }}
        />
      </div>
      <div className={styles.rightContainer}>
        <Skeleton height={500} width={450} />
      </div>
    </div>
  );
}

export default MovieDetailsSkeleton;
