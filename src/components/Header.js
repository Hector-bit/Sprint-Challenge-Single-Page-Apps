import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/CharacterList">Characters</Link>
        </div>
        {/* <div>
          <Link to="/contact">Contact</Link>
        </div> */}
    </nav>
    </header>
  );
}
