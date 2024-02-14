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
              <span className={styles.normalText}>
                <b className={styles.stats}>Enredo: </b>
                {movie.Plot}
              </span>
              <span className={styles.normalText}>
                <b className={styles.stats}>Tipo: </b>
                {movie.Type}
              </span>
              <span className={styles.normalText}>
                <b className={styles.stats}>Atores: </b>
                {movie.Actors}
              </span>
              <span className={styles.normalText}>
                <b className={styles.stats}>Premios: </b>
                {movie.Awards}
              </span>
              <span className={styles.normalText}>
                <b className={styles.stats}>Avaliações: </b>
                {movie.Ratings.map((rat) => `${rat.Source} - ${rat.Value}`)}
              </span>
              <span className={styles.normalText}>
                <b className={styles.stats}>Arrecadação: </b>
                {movie.BoxOffice}
              </span>
              <span className={styles.normalText}>
                <b className={styles.stats}>Diretor: </b>
                {movie.Director}
              </span>
              <span className={styles.normalText}>
                <b className={styles.stats}>Gênero: </b>
                {movie.Genre}
              </span>
              <span className={styles.normalText}>
                <b className={styles.stats}>MetaScore 0/100: </b>
                {movie.Metascore}
              </span>
              <span className={styles.normalText}>
                <b className={styles.stats}>Lançamento: </b>
                {movie.Released}
              </span>
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
