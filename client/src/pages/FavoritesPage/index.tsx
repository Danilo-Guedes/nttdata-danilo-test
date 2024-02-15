import PageLayout from "../../components/PageLayout";
import useMovieStorage from "../../hooks/favorites";
import MovieCard from "../Home/components/MovieCard";
import EmptyInbox from '../../svgs/empty-inbox.svg'

import styles from "./FavoritePage.module.scss";

function FavoritesPage() {
  const { movies } = useMovieStorage();
  return (
    <PageLayout>
      <h1 className={styles.title}>Favoritos</h1>
      <>
        {movies.length === 0 ? (
          <div className={styles.svgContainer}>
            <img alt="movie not found" src={EmptyInbox} width={400} />
            <span>Nenhum filme favoritado</span>
          </div>
        ) : (
          <ul>
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </ul>
        )}
      </>
    </PageLayout>
  );
}

export default FavoritesPage;
