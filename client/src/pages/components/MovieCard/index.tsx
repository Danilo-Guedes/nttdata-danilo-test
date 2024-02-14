import { Card } from "@ui5/webcomponents-react";
import { MoviesCard } from "../../../types/movies";

import styles from "./MovieCard.module.scss";
import { Link } from "react-router-dom";

type MovieCardProps = {
  movie: MoviesCard;
};

function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
    <Card className={styles.card}>
        <div className={styles.innerCardContainer}>

      <div className={styles.imgContainer}>
        <img src={movie.Poster} alt={movie.Title}
        width={300}
        height={400}
        />
      </div>
      <div className={styles.dataContainer}>
        <h1>{movie.Title}</h1>
        <p>Ano: {movie.Year}</p>
        <p>Tipo: {movie.Type}</p>
      </div>
        </div>
    </Card>
    </Link>
  );
}

export default MovieCard;
