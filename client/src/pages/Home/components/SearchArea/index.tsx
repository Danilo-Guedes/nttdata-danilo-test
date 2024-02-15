import { Input, Button } from "@ui5/webcomponents-react";

import styles from "./SearchArea.module.scss";

type SearchAreaProps = {
  searchText: string;
  setSearchText: (text: string) => void;
  handleSearchButtonClick: () => void;
  handleResetButtonClick: () => void;
};

function SearchArea({
  searchText,
  setSearchText,
  handleSearchButtonClick,
  handleResetButtonClick,
}: SearchAreaProps) {
  return (
    <>
      <div className={styles.titleContainer}>
        <h1 className={styles.titleText}>Pesquise e descubra...</h1>
        <span className={styles.subtitleText}>
          Faça uma pesquisa pelo nome do filme ou serie desejado(a),
          posteriromente será exibido uma lista de resultados com uma imagem de
          capa oficial, data de lançamento e ao clicar no card exibido você será
          levado a tela de detalhes.
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
    </>
  );
}

export default SearchArea;
