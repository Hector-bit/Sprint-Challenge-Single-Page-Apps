import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";

// import { Home, About, Contact, Navigation } from './components';
import { Route } from "react-router-dom";
import CharacterList from "./components/CharacterList.js";


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/Characters" component={CharacterList}/>
      <Route path="/Search" component={SearchForm}/>
      {/* <WelcomePage /> */}
    </main>
  );
}
