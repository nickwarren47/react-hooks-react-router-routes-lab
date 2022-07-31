import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsDisplayed = actors.map((actor) => (
    <div key={actor.name}>
      {actor.name}
      <ul> {actor.movies.map((movie)=>(
        <li key={movie}>{movie}</li>
      ))}
      </ul>
    </div>
  ))
  return (
  <div>
    <h1>Actors Page</h1>
    {actorsDisplayed}
  </div>
  );
}

export default Actors;
