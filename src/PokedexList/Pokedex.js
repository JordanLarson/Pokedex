import React, { useState } from "react";
import { Link } from "react-router-dom";

function PokedexList() {
  const [pokemonList, setPokemonList] = useState([]);
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
  const makeAPICall = async () => {
    const res = await fetch(url);
    const json = await res.json();
    setPokemonList(json.results);
  };
  makeAPICall();
  let allPokemon = pokemonList.map((pokemon, index) => {
    return <p key={index}>{pokemon.name}</p>;
  });
  return (
    <>
      <ul>{allPokemon}</ul>
      <Link to={"/pokemon/" + element.name}>
        <h3>{element.name}</h3>
      </Link>
    </>
  );
}
export default PokedexList;
