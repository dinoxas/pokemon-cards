import React from "react";

function Pokemon({ pokemon }) {
  return (
    <div>
      <p>
        <img src={pokemon.image} alt={pokemon.name} />
      </p>
    </div>
  );
}

export default Pokemon;
