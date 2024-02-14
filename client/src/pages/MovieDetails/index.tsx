import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../api/movies";
import { useQuery } from "@tanstack/react-query";
import { MovieDetails } from "../../types/movies";

import styles from "./MovieDetails.module.scss";
import PageLayout from "../../components/PageLayout";

function MovieDetailsPage() {
  const { movieId } = useParams();

  console.log({ movieId });
  const {
    data: movie,
    isLoading,
    isError,
    isSuccess,
  } = useQuery<MovieDetails>({
    queryKey: ["movie-details", movieId],
    queryFn: async () => {
      return await getMovieDetails(movieId);
    },
  });
  return (
    <PageLayout>
      <div>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error</div>}
        {isSuccess && (
          <div className={styles.outerContainer}>
            <div className={styles.leftContainer}>
              <span className={styles.title}>{movie.Title}</span>
              <span className={styles.normalText}>{movie.Plot}</span>
              <span className={styles.normalText}>{movie.Type}</span>
              <span className={styles.normalText}>{movie.Actors}</span>
              <span className={styles.normalText}>{movie.Awards}</span>
              <span className={styles.normalText}>
                {movie.Ratings.map((rat) => `${rat.Source} - ${rat.Value}`)}
              </span>
              <span>{movie.BoxOffice}</span>
              <span>{movie.Director}</span>
              <span>{movie.Genre}</span>
              <span>{movie.Metascore}</span>
              <span>{movie.Production}</span>
              <span>{movie.Released}</span>
            </div>
            <div className={styles.rightContainer}>
              <img
                src={movie.Poster}
                alt={movie.Title}
                // width={400}
                // height={700}
                className={styles.poster}
              />
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}

export default MovieDetailsPage;
