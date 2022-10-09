import { useEffect, useState } from "react";

export default function useFetchData(URL) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const jsonData = await response.json();
        setData(jsonData);
        setError(null); // if response was successful, reset any previous error message.
      } catch (err) {
        setError("could not fetch the data");
        console.log(err.message);
      }
    };
    getData();
  }, [URL]);

  return { data };
}
