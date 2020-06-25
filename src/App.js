import React, { useState } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import MyTeam from "./MyTeam/MyTeam";
import Pokedex from "./PokedexList/Pokedex";
import SinglePokemon from "./Pokemon/Pokemon";

function App() {
  const [myTeam, setMyTeam] = useState([]);

  const addToTeam = (element) => {
    setMyTeam(element);
  };
  return (
    <div className="App">
      <nav>
        <Link to="/pokemon">
          <h3>Pokemon</h3>
        </Link>
        <Link to="/MyTeam"> My Team </Link>
        <Link to="/Pokedex">Pokedex</Link>
      </nav>
      <main>
        <Route
          exact
          path="/Pokedex"
          render={(routerProps) => <Pokedex {...routerProps} />}
        />
        <Route
          path="/MyTeam"
          render={(routerProps) => <MyTeam myTeam={myTeam} {...routerProps} />}
        />
        <Route />
        <Route
          exact
          path="/pokemon/:name"
          render={(routerProps) => (
            <SinglePokemon addToTeam={addToTeam} {...routerProps} />
          )}
        />
      </main>
    </div>
  );
}
export default App;
