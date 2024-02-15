import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import PageLayout from "../../components/PageLayout";
import { getMoviesApi } from "../../api/movies";
import { Input, Button } from "@ui5/webcomponents-react";
import "react-loading-skeleton/dist/skeleton.css";

import SearchSvg from "../../svgs/online-search.svg";
import EmptyInbox from "../../svgs/empty-inbox.svg";
import CheckList from "../../svgs/checklist.svg";

import styles from "./Home.module.scss";
import MoviesList from "./components/MoviesList";
import Skeleton from "react-loading-skeleton";

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
      <div className={styles.titleContainer}>
        <h1 className={styles.titleText}>Pesquise e descubra...</h1>
        <span className={styles.subtitleText}>
          Faça uma pesquisa por texto do filme ou serie desejado(a), posteriromente será
          exibido uma lista de resultados com uma imagem de capa oficial,
          data de lançamento e ao clicar no card exibido você será levado a tela
          de detalhes.
        </span>
      </div>
      <div className={styles.searchContainer}>
        <Input
          placeholder="Search..."
          className={styles.searchInput}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          design="Emphasized"
          icon="search"
          className={styles.searchBtn}
          onClick={() => {
            if (searchText.trim()?.length === 0) return;
            handleSearchButtonClick();
          }}
        >
          Search
        </Button>
        <Button
          design="Default"
          className={styles.resetBtn}
          onClick={handleResetButtonClick} // Reset the query
        >
          Reset
        </Button>
      </div>
      <div>
        {isLoading && (
          <div className={styles.loadingContainer}>
            {Array(10).fill(<Skeleton height={400} width={600} />)}
          </div>
        )}
        {isError && <p>Error</p>}
        {isSuccess && (
          <>
            {data?.Error && (
              <>
                {data?.Error.includes("Movie not found") ? (
                  <div className={styles.svgContainer}>
                    <img alt="movie not found" src={EmptyInbox} width={400} />
                    <span >Filme/Serie não encontrado(a)</span>
                  </div>
                ) : (
                  <div className={styles.svgContainer}>
                    <img alt="Too many results" src={CheckList} width={400} />
                    <span style={{marginTop: "2rem"}}>Lista muito grande, refine a pesquisa</span>
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
