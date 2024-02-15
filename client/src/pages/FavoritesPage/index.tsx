import useMovieStorage from "../../hooks/favorites";

function FavoritesPage() {
  const { movies } = useMovieStorage();
  return <pre>{JSON.stringify(movies, null, 4)}</pre>;
}

export default FavoritesPage;
