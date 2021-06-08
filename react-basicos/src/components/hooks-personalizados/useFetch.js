import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIdPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await fetch(url);

        if (!res.ok) {
          const errorObject = {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
          };

          throw errorObject;
        }

        let data = await res.json();

        setIdPending(false);
        setData(data);
        setError({ err: false });
      } catch (err) {
        setIdPending(false);
        setError(err);
      }
    };
    getData(url);
  }, [url]);

  return { data, isPending, error };
};
