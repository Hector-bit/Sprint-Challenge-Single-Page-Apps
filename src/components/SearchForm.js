import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

// export default function SearchForm() {
 
//   const [search, setSearch] = useState()

//   return (
//     <section className="search-form">
//      // Add a search form here
//      <header>Search</header>
//      <div></div>
//     </section>
//   );
// }

export default function SearchForm() {
  // TODO: Add useState to track data from useEffect
  const [find, setFind] = useState([]);


  useEffect(() => {
    axios
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    // const getcharacters = () => { character setCharacter
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setFind(res.data.results)
        console.log(res.data.results)
      })
      .catch(error => {
        console.error('Server Error', error);
      })
  },[])

  console.log(find)

  return (
    <section className="find-list">
      <div className="card-holder">
      {find.map(info => {
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