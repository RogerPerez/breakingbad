import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../spinner/Spinner";
import SearchedText from "../searchedText/SearchedText";

const SuggestionsInput = ({ doSearchCharacters, doSearchedCharacter }) => {
  const router = useRouter();
  const { t } = useTranslation("global");
  const [text, setText] = useState("");
  const [searchedText, setSearchedText] = useState("");

  useEffect(() => {
    doSearchedCharacter(searchedText);
  }, [searchedText]);

  //   This hook fetch the api, and return the suggestions that match inputs text
  const { data, loading } = useFetch(
    `${process.env.NEXT_PUBLIC_HOST}${
      text ? `?name=${text}` : "?limit=8&offset=0"
    }`
  );
  const handleInputChange = (e) => {
    setText(e.target.value.toLowerCase());
  };

  //This function handles the search and pass data to parent

  const handleSearch = () => {
    setSearchedText(text);
    doSearchCharacters(data);
    setText("");
  };

  //This function handles the search when pressing the enter key
  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="suggestions">
      <div className="suggestionsInput">
        <div className="inputContainer">
          <input
            className="input"
            placeholder={t("suggestions.input-placeholder")}
            value={text}
            onChange={handleInputChange}
            onKeyPress={handleKeypress}
          />
          <FontAwesomeIcon
            onClick={() => handleSearch()}
            className="searchIcon"
            icon={faSearch}
          />
        </div>

        {text.length > 0 ? (
          loading ? (
            <div className="spinner">
              <Spinner />
            </div>
          ) : (
            data?.slice(0, 4).map((character) => (
              <p
                key={character.char_id}
                onClick={() => router.push(`/character/${character.char_id}`)}
                className="suggestion"
              >
                {character.name}
              </p>
            ))
          )
        ) : null}
      </div>
      {searchedText && (
        <SearchedText text={searchedText} doHandleSearch={handleSearch} />
      )}
    </div>
  );
};

export default SuggestionsInput;
