import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Pokedex = (props) => {
  const [pokemonData, getPokemonData] = useState([]);

  const fetchItems = async () => {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    );
    const data = await res.json();
    getPokemonData(data.results);
  };
  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <div className="pokedex list">
      {pokemonData.map((element, index) => {
        return (
          <h5 key={element.id}>
            <Link to={`/pokemon/${element.name}`}> {element.name}</Link>
          </h5>
        );
      })}
      ;
    </div>
  );
};

export default Pokedex;
