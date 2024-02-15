import { Button, Modals } from "@ui5/webcomponents-react";
import { MovieDetails } from "../../../../types/movies";
import styles from "./MovieDetailsView.module.scss";
import "@ui5/webcomponents-icons/dist/heart.js";
import useMovieStorage from "../../../../hooks/favorites";

type MovieDetailsViewProps = {
  movie: MovieDetails;
};

function MovieDetailsView({ movie }: MovieDetailsViewProps) {
  const { addMovie, removeMovie, movies } = useMovieStorage();
const showToast = Modals.useShowToast()

  return (
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
          {movie.Ratings.map((rat) => ` ( ${rat.Source} - ${rat.Value} ) `)}
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
        <div className={styles.favBtnContainer}>
          {movies.find((m) => m.imdbID === movie.imdbID) ? (
            <Button
              design="Negative"
              icon="sys-cancel"
              iconEnd
              className={styles.searchBtn}
              onClick={() => {
                removeMovie(movie.imdbID);
                showToast({
                    children: "Filme removido dos favoritos",
                    style: { backgroundColor: "red", padding: "1rem", color: "white"},
                    placement: "MiddleCenter"
                })
              }}
            >
              Remover Favoritos
            </Button>
          ) : (
            <Button
              design="Emphasized"
              icon="heart"
              iconEnd
              className={styles.searchBtn}
              onClick={() => {
                addMovie(movie);
                showToast({
                    children: "Filme adicionado aos favoritos",
                    style: { backgroundColor: "green", padding: "1rem", color: "white"},
                    placement: "MiddleCenter"
                })
              }}
            >
              Adicionar Favoritos
            </Button>
          )}
        </div>
      </div>
      <div className={styles.rightContainer}>
        <img src={movie.Poster} alt={movie.Title} className={styles.poster} />
      </div>
    </div>
  );
}

export default MovieDetailsView;
