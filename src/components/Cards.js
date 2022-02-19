import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import CardItem2 from "./CardItem2";
import CardItem3 from "./CardItem3";
import CardItem4 from "./CardItem4";
import CardItem5 from "./CardItem5";

function Cards() {
  return (
    <div className="cards">
      <h1>Links to Learn</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/links-to-learn-metamask.jpg"
              text="Metamask (wallet)"
              path="https://www.youtube.com/watch?v=6Gf_kRE4MJU"
            />
            <CardItem2
              src="images/links-to-learn-ipfs.jpg"
              text="IPFS (Web3) Tools"
              path="https://github.com/ipfs/awesome-ipfs"
            />
          <ul className="cards__items">
            <CardItem3
              src="images/links-to-learn-techcrunch.jpg"
              text="TechCrunch (Vids & Articles)"
              path="/https://techcrunch.com/2018/07/07/watch-all-the-interviews-from-techcrunch-sessions-blockchain/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+Techcrunch+(TechCrunch)&utm_conten"
            />
            <CardItem4
              src="images/links-to-learn-a-cypherpunks-manifesto.jpg"
              text="A Cypherpunk's Manifesto"
              path="https://ipfs.io/ipfs/QmYPTbT6Q1aVCsekE8ZzfjJu9h9gjd4oTswHLJ6JBAyfku"
            />
              <ul className="cards__items">
            <CardItem5
              src="images/links-to-learn-my-youtube.jpg"
              text="Vids I Made"
              path="https://www.youtube.com/channel/UCN55qRrQl-UIR-u36mx6g0A"
            />    
            <CardItem5
              src="images/links-to-learn-ipfs.jpg"
              text="IPFS (Web3) Tools"
              path="https://github.com/ipfs/awesome-ipfs"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
