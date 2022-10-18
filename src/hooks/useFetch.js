import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, [url]);

  // This custom hook fetch the api, and handles the response, state (loading) and errors

  const getData = () => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        const data = res.data;
        setData(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { data, loading, error };
}

export default useFetch;
