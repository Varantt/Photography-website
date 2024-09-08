import { useState, useEffect } from "react";
import { UseFetchArgs } from "../models/types";

const useFetch = <T>(url: string): UseFetchArgs<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url, {});

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData = await response.json();
        if (Array.isArray(responseData)) {
          setData(responseData as T);
        } else {
          setData((responseData as any).data as T);
        }
        setIsLoading(false);
      } catch (err: any) {
        console.error("Error during fetch:", err);
        setError(err.message || "An unknown error has occured.");
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, data, error };
};

export default useFetch;
