import { useEffect, useState } from "react";

export default function useFetchData(URL) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const controller = new AbortController();

  useEffect(() => {
    const controller = new AbortController();

    const getData = async () => {
      try {
        const response = await fetch(URL, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const jsonData = await response.json();

        setData(jsonData);
        setError(null); // if response was successful, reset any previous error message.
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("The fetch was aborted");
        } else {
          setError("Could not fetch the data");
        }
      }
    };
    getData();
    return () => {
      controller.abort();
    };
  }, [URL]);

  return { data, error };
}
