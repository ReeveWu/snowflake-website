import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPening] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data for the resource. ");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPening(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPening(false);
          setData(null);
        });
    }, 10);

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
