import { useEffect, useState } from "react";

export default function useFetchData(URL) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(URL);
      const jsonData = await response.json();
      setData(jsonData);
    };
    getData();
  }, [URL]);

  return data;
}
