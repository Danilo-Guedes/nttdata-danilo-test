import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PageLayout from "../../components/PageLayout";
import { getMoviesApi } from "../../api/movies";

import { Text, Input, Button } from "@ui5/webcomponents-react";

import styles from "./Home.module.scss";

function Home() {
  const [searchText, setSearchText] = useState("");
  const [searchedText, setSearchedText] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["movies-list", searchedText],
    queryFn: async () => {
      setSearchText("");
      return await getMoviesApi(searchedText);
    },
    enabled: searchedText.length > 0,
    refetchOnWindowFocus: false,
  });
  console.log({
    data,
    isLoading,
    isError,
  });

  const handleSearchButtonClick = () => {
    setSearchedText(searchText.trim());
  };

  return (
    <PageLayout>
      <div className={styles.titleContainer}>
        <Text className={styles.titleText}>Title</Text>
        <Text className={styles.subtitleText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde et
          repellat dolorum qui. Quo praesentium, non voluptatum ipsa temporibus
          excepturi reprehenderit suscipit aliquid cum nostrum sapiente
          voluptates. Quidem, quisquam. Repudiandae.
        </Text>
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
            if (searchText.trim()?.length === 0) return
            handleSearchButtonClick();
          }}
        >
          Search
        </Button>
        <Button design="Default" className={styles.resetBtn}>
          Reset
        </Button>
      </div>
      <div>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error</p>}
        {data && <pre>{JSON.stringify(data, null, 4)}</pre>}
      </div>
    </PageLayout>
  );
}

export default Home;
