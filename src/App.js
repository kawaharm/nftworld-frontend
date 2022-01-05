import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

// Components
import NftContainer from "./components/NftContainer";
import Homepage from "./components/Homepage";
import NftPage from "./components/NftPage";
import CryptoContainer from "./components/CryptoContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/nft" element={<NftContainer />} />
          <Route path="/nft/cryptopunks" element={<NftPage collection={"cryptopunks"} />} />
          <Route path="/nft/boredapeyachtclub" element={<NftPage collection={"boredapeyachtclub"} />} />
          <Route path="/nft/mutant-ape-yacht-club" element={<NftPage collection={"mutant-ape-yacht-club"} />} />
          <Route path="/nft/collectvoxmirandus" element={<NftPage collection={"collectvoxmirandus"} />} />
          <Route path="/cryptopunks" element={<CryptoContainer />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
