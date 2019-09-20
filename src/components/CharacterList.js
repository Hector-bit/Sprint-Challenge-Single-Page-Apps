import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios 
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setCharacter(res.data)
        });
        //Note: .results is an array so it need an index to display character info
        // (res.data.results.map(char => {
        //   console.log(char);
        // }));
        // console.log(character);
      })
    
  console.log(character);

  return (
    <section className="character-list">
      <div>
      <h2>TODO: `array.map()` over your state here!</h2>
      {character.results.map(info => (
        <characterDetails name={info.name} status={info.status} />
      ))}
      </div>
    </section>
  );
}

function characterDetails({ character }) {
  const { name, status, loctaion, species} = character;
  return (
    <Link to={`/CharacterList`}>
    <CharacterCard {...character}></CharacterCard>  
    {/* <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div> */}
    </Link>
  );
}
