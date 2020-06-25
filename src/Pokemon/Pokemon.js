import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";

const SinglePokemon = (props) => {
  const [myTeamArray, addToTeamArray] = useState([]);
  const [pokeImage, getPokeImage] = useState([]);
  const [pokeType, getPokeType] = useState([]);
  const [pokeHeight, getPokeHeight] = useState([]);
  const [pokeWeight, getPokeWeight] = useState([]);

  const pokeName = props.match.params.name;
  console.log(props.match.params.name);
  //   const [pokemonData, getPokemonData] = useState([]);
  //   console.log("PokemonData", data);
  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
      const data = await res.json();
      getPokeImage(data.sprites);
      getPokeHeight(data.height);
      getPokeType(data.types[0].type);
      getPokeWeight(data.weight);
    };

    makeApiCall();
  }, []);
  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch(`https://pokeapi.co/v2/pokemon/${pokeName}`);
      const data = await res.json();
      console.log(data.sprites);
      getPokeImage(data.sprites);
      getPokeHeight(data.pokeHeight);
      getPokeWeight(data.pokeWeight);
      getPokeType(data.pokeType[0].type);
    };

    makeApiCall();
  }, [pokeName]);

  const addToTeam = (event) => {
    let newObject = {};
    console.log("being added to my team");
    newObject = {
      image: pokeImage.front_default,
      name: pokeName,
      height: pokeHeight,
      weight: pokeWeight,
      type: pokeType.name,
    };
    addToTeamArray([newObject, ...myTeamArray]);
    console.log(myTeamArray);
    props.addToTeam(myTeamArray);
  };
  return (
    <div>
      <img src={pokeImage.front_default} alt="" />
      <p>{pokeName}</p>
      <p>Pokemon's Height : {pokeHeight}</p>
      <p> Pokemon's Weight: {pokeWeight}</p>
      <p> Pokemon's Type : {pokeType.name} </p>
      <input type="button" value="Add to My Team" onClick={addToTeam} />
      <Link to="/myTeam">My Team</Link>
    </div>
  );
};

export default SinglePokemon;
