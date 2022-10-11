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

/* .test {
  background-image: url("../../Assets/prime.jpg");
} */

/* .body-container {
  background-image: url("../../Assets/prime.jpg");
  width: 100vw;
  height: 100vh;

  background-color: #1994f3; */
/*
  background-repeat: no-repeat;
  background-position: center top;
  background-size: clamp(100%, 150%, 200%);

  max-width: 1500px;
  min-width: 1200px;
  margin: 0 auto;
  height: 100vh; */

/*
.test {
  position: absolute;
}

.test2 {
  position: relative;
  z-index: 1;
}

@media screen and (max-width: 430px) {
  .body-container {
    background-size: clamp(80%, 150%, 170%);
  }
} */
