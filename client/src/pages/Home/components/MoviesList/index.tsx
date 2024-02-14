import { MoviesCard } from "../../../../types/movies";
import MovieCard from "../MovieCard";

import styles from './MoviesList.module.scss'

type MoviesListProps = {
  movies: MoviesCard[];
};

function MoviesList({ movies }: MoviesListProps) {
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MoviesList;
