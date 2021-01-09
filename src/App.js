import * as React from "react";
import { useQuery } from "@apollo/client";

import { GET_POKEMONS } from "./query";

function App() {
  const { data, fetchMore } = useQuery(GET_POKEMONS, {
    variables: {
      offset: 0,
      limit: 10,
    },
  });

  const fetchNext = () => {
    console.log("fetch more");
    fetchMore({
      variables: {
        offset: data?.pokemons?.nextOffset,
      },
    });
  };

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      {data?.pokemons?.results?.map(({ id, image, name }) => (
        <div
          key={id}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={image}
            alt={name}
            style={{ width: "100px", height: "100px" }}
          />
          <span>{name}</span>
        </div>
      ))}
      <button
        onClick={fetchNext}
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
      >
        Fetch More
      </button>
    </div>
  );
}

export default App;
