import React, { useState } from "react";
import "./App.css";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import MyTeam from "./MyTeam/MyTeam";
import Pokedex from "./PokedexList/Pokedex";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const handleClick = (pokemon) => {
    console.log("app- handleclick", pokemon);
  };
  return (
    <div className="App">
      <nav>
        <Link to="/">
          <h3>Pokemon</h3>
        </Link>
        <Link to="/MyTeam"> My Team </Link>
        <Link to="/Pokedex">Pokedex</Link>
      </nav>
      <main>
        <Route exact path="/" component={Pokedex} />
        <Route exact path="/Pokedex" component={Pokedex} />
        <Route
          exact
          path="/MyTeam"
          component={MyTeam}
          handleClick={handleClick}
        />
        <Route
          path="/pokemon/:name"
          render={(routerProps) => <SinglePokemon {...routerProps} />}
        />
      </main>
    </div>
  );
}
export default App;
