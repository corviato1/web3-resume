import React from "react";
import "../App.css";
import "./HeroSection.css";
import "./Cards.css";
import CardItem from "./CardItem";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1><a href="https://ipfs.io/#why" target="_blank">Web3</a> Surfer & Agricultural Tinkerer </h1>
      <p><a href="https://ipfs.io/#how" target="_blank">Web3</a> supporter. Agricultural Consultant.  Cryptocurrency Miner.  DApp Developer.</p>
      <h3>Site Powered by IPFS and FLEEK</h3>
      <img className="Mike" src="images/home.jpg" />
    </div>
  );
}

export default HeroSection;
