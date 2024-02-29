import { useState, useEffect } from "react";

const useFetch = (fetchFn) => {
  const [fetchedData, setFetchedData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [haserror, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function DataRetriving() {
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        alert(error);
        setError(true);
      }
      setIsLoading(false);
    }
    DataRetriving();
  }, [fetchFn]);
  return {
    fetchedData,
    isLoading,
    haserror,
  };
};

export default useFetch;
