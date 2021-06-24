import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortContoller = new AbortController();
    const signal = abortContoller.signal;

    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);

        if (!res.ok) {
          let err = new Error('Error en la petición fetch');
          err.status = res.status || '00';
          err.statusText = res.statusText || 'Ocurrió un error';
          throw err;
        }

        const json = await res.json();

        // Si no hubo ningun error y que no se rechazó la petición
        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (error) {
        // si la señal no es abort
        if (!signal.aborted) {
          setData(null);
          setError(error);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => abortContoller.abort();
  }, [url]);

  return { data, error, loading };
};
