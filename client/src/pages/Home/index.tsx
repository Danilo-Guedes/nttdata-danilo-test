import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import PageLayout from "../../components/PageLayout";
import { getMoviesApi } from "../../api/movies";
import "react-loading-skeleton/dist/skeleton.css";

import SearchSvg from "../../svgs/online-search.svg";
import EmptyInbox from "../../svgs/empty-inbox.svg";
import CheckList from "../../svgs/checklist.svg";

import styles from "./Home.module.scss";
import MoviesList from "./components/MoviesList";
import MoviesListSkeleton from "./components/MoviesListSkeleton";
import SearchArea from "./components/SearchArea";

function Home() {
  const [searchText, setSearchText] = useState("");
  const [searchedText, setSearchedText] = useState("");

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["movies-list", searchedText],
    queryFn: async () => {
      setSearchText("");
      return await getMoviesApi(searchedText);
    },
    enabled: searchedText.length > 0,
    refetchOnWindowFocus: false,
  });

  const queryClient = useQueryClient();

  const handleSearchButtonClick = () => {
    setSearchedText(searchText.trim());
  };

  const handleResetButtonClick = async () => {
    await queryClient.invalidateQueries({
      queryKey: ["movies-list"],
    });
    setSearchText("");
    setSearchedText("");
  };

  return (
    <PageLayout>
      <SearchArea
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearchButtonClick={handleSearchButtonClick}
        handleResetButtonClick={handleResetButtonClick}
      />
      <div>
        {isLoading && <MoviesListSkeleton />}
        {isError && <p>Error</p>}
        {isSuccess && (
          <>
            {data?.Error && (
              <>
                {data?.Error.includes("Movie not found") ? (
                  <div className={styles.svgContainer}>
                    <img alt="movie not found" src={EmptyInbox} width={400} />
                    <span>Filme/Serie não encontrado(a)</span>
                  </div>
                ) : (
                  <div className={styles.svgContainer}>
                    <img alt="Too many results" src={CheckList} width={400} />
                    <span style={{ marginTop: "2rem" }}>
                      Lista muito grande, refine a pesquisa
                    </span>
                  </div>
                )}
              </>
            )}
            {data?.Search?.length > 0 && <MoviesList movies={data.Search} />}
          </>
        )}
        {!data && !isLoading && (
          <div className={styles.svgContainer}>
            <img alt="search a movie" src={SearchSvg} width={400} />
          </div>
        )}
      </div>
    </PageLayout>
  );
}

export default Home;
