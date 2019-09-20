import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function SearchForm() {
  const [find, setFind] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        const data = res.data.results;
        console.log(data)
        const result = data.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        setFind(result);
      });
  }, [query]);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div className="find">
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
      <div className="spell">
        {/* {find.map(who => {
          return ( */}
            <div className="who-list ">
                {find.map(info => {
                  return (
                  <CharacterCard
                  image={info.image}
                  name={info.name}
                  status={info.status}
                  location={info.location.name}
                  species={info.species}
                  />
                )})}
            </div>
      </div>
    </div>
  );
}
