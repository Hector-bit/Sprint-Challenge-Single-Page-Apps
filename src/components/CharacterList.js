import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
//import { Link } from "react-router-dom";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    // const getcharacters = () => {
    axios 
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setCharacter(res.data.results)
        console.log(res.data.results)
      })
      .catch(error => {
        console.error('Server Error', error);
      })
  },[])

  console.log(character)

  return (
    <section className="character-list">
      <div className="card-holder">
      {character.map(info => {
        return (<CharacterCard
        image={info.image}
        name={info.name}
        status={info.status}
        location={info.location.name}
        {...console.log(info.location.name)}
        species={info.species}
        />
      )})}
      </div>
    </section>
  )
}
