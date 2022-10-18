import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const SearchedText = ({ text, doHandleSearch }) => {
  return (
    <div className="searchedElement">
      {text}
      <FontAwesomeIcon
        onClick={doHandleSearch}
        className="refreshIcon"
        icon={faX}
      />
    </div>
  );
};

export default SearchedText;
