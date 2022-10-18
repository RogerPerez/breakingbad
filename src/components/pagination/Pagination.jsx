import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Spinner from "../spinner/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ doPagination, url }) => {
  const [counter, setCounter] = useState(0);

  // This hook fetch the api, and return 8 characters,with and offset (used for pagination)
  const { data, loading } = useFetch(`${url}?limit=8&offset=${counter * 8}`);
  // This hook fetch the api, and return ALL characters to get the total numeber of characters
  const { data: total } = useFetch(`${url}`);

  useEffect(() => {
    doPagination(data, loading);
    console.log;
  }, [data]);

  const handlePagination = (action) => {
    if (action === "increment" && counter < Math.ceil(total.length / 8) - 1) {
      setCounter(counter + 1);
    } else if (action === "decrement" && counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="pagination">
      <div
        className="iconContainer"
        onClick={() => handlePagination("decrement")}
      >
        <FontAwesomeIcon className="icon" icon={faChevronLeft} />
      </div>
      {loading ? (
        <div className="spinner">
          <Spinner />
        </div>
      ) : (
        <p className="counter">
          {counter + 1} / {total && Math.ceil(total.length / 8)}
        </p>
      )}
      <div
        className="iconContainer"
        onClick={() => handlePagination("increment")}
      >
        <FontAwesomeIcon className="icon" icon={faChevronRight} />
      </div>
    </div>
  );
};
export default Pagination;
