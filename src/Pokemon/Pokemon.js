import React, { useState, useEffect } from "react";

const SinglePokemon = (props) => {
  const pokeName = props.match.params.name;
  console.log(props.match.params.name);
  const [pokemonData, getPokemonData] = useState([]);
  console.log("PokemonData", pokemonData);

  const fetchItems = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    const data = await res.json();
    getPokemonData(data.sprites);
  };

  useEffect(() => {
    fetchItems();
  }, [pokemonData]);
  return <img src={pokemonData.back_default} alt="" />;
};

export default SinglePokemon;
