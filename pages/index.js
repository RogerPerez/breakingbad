import Head from "next/head";
import Layout from "../src/components/layout/Layout";
import CharacterCard from "../src/components/characterCard/CharacterCard";
import SuggestionsInput from "../src/components/suggestionsInput/SuggestionsInput";
import { useState } from "react";
import Pagination from "../src/components/pagination/Pagination";
import { useTranslation } from "react-i18next";
import Spinner from "../src/components/spinner/Spinner";

export default function Home({}) {
  const [charactersList, setCharactersList] = useState([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(true);

  const { t } = useTranslation("global");

  // Set characters on search
  const handleSearch = (data) => {
    setCharactersList(data);
  };

  const handleSearchedCharacter = (searchedCharacter) => {
    if (searchedCharacter) {
      setSearched(true);
    } else {
      setSearched(false);
    }
  };

  const handlePagination = (data, loading) => {
    if (data) {
      setCharactersList(data);
      setLoading(loading);
    }
  };
  return (
    <>
      <Head>
        <title>Breaking Bad test</title>
        <meta name="description" content="Breaking Bad test by Roger P.S" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="homeContainer">
          <div className="filters">
            <SuggestionsInput
              doSearchCharacters={handleSearch}
              doSearchedCharacter={handleSearchedCharacter}
            />
            {!searched && (
              <Pagination
                doPagination={handlePagination}
                url={process.env.NEXT_PUBLIC_HOST}
              />
            )}
          </div>
          {!loading ? (
            <>
              <div className="charactersContainer">
                {charactersList &&
                  charactersList.map((character) => (
                    <CharacterCard
                      key={character.char_id}
                      character={character}
                    />
                  ))}
              </div>
              {charactersList.length == 0 && (
                <p className="noCharacters">{t("home.no-characters")}</p>
              )}
            </>
          ) : (
            <div className="spinnerContainer">
              <Spinner />
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}
