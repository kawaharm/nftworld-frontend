import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

// Components
import NftContainer from "./components/NftContainer";
// import CharacterContainer from "./components/CharacterContainer";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import VoteContainer from "./components/VoteContainer";
// import SeasonContainer from "./components/SeasonContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<NftContainer />} />
          {/* <Route path="/characters" element={<CharacterContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vote" element={<VoteContainer />} />
          <Route path="/seasons" element={<SeasonContainer />} /> */}
        </Routes>
      </Router>
    );
  }
}

export default App;
