import Skeleton from "react-loading-skeleton";

import styles from './MoviesListSkeleton.module.scss'

function MoviesListSkeleton() {
  return (
    <div className={styles.loadingContainer}>
    {Array(10).fill(<Skeleton height={400} width={600} />)}
  </div>
  )
}

export default MoviesListSkeleton