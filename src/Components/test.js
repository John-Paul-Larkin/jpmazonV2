import { useEffect } from "react";

export default function useFetchData(URL) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const controller = new AbortController();

  useEffect(() => {
    const getData = async () => {
      try {
        response = await fetch(URL, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(response.status);
        }

        jsonData = await response.json();
        setData(jsonData);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("The fetch was aborted");
        } else {
          console.log();
          setError("could not fetch the data");
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
