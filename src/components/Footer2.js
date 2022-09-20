import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer2() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Skills and Hobbies
        </p>
        <div className="input-areas"></div>
        <ul>----------------</ul>
        <p>
          _________________________________________
        </p>
        <br></br>
        <br></br>
      </section>

      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Web3</h2>
            <Link to="/about">Early adopter of ENS</Link>   
            <Link to="/about">Filecoin Space Race community advocate</Link>
            <Link to="/about">Filecoin genesis(Pre Space Race & Space Race) miner</Link>
            <Link to="/about">Fought for equal air drop for small miners that led to second fellowship opportunity</Link>
            <Link to="/about">Featured on several C3 Media Podcasts, including ones with core devs of Ravencoin, and other chains</Link>
            <Link to="/about">Early adopter/developer (including airdrops) of Ravencoin</Link>   
            <Link to="/about">IPFS user and developer</Link>
            <Link to="/about">Creator of NFT featured at 2nd annual Ravencoin meetup (2019)</Link>
            <Link to="/about">Miner of several chains; CPU, GPU, Storage, & ASIC starting in early 2018</Link>
            <Link to="/about">Windows & Linux</Link>
            <Link to="/about">DApp developer & maker</Link>
          </div>
          <div class="footer-link-items">
            <h2>Agricultural</h2>
            <Link to="/about">Designer and holder of three utility patents</Link>
            <Link to="/about">Aided in many crops, seed to harvest</Link>
            <Link to="/about">Understanding of Pest Management</Link>
            <Link to="/about">Strong understanding of Hydroponics</Link>
            <Link to="/about">Intermediate builder of Aquaponics</Link>
            <Link to="/about">Explorer of better techniques</Link>
            <Link to="/about">Work experience greater than a decade</Link>
            <Link to="/about">Bridging agriculture projects with Web3 DApps in as many ways as possible</Link>
          </div>
         </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Information Technology</h2>
            <Link to="/about">Computer Builder</Link>
            <Link to="/about">Data backups</Link>
            <Link to="/about">Make crypto educational contents and tutorials for mining and DApps</Link>  
            <Link to="/about">Video Conferencing</Link>
            <Link to="/about">Remote troubleshooting</Link>
            <Link to="/about">Javascript, HTML, CSS</Link>
            <Link to="/about">Servers and Workstations</Link>
          </div>
          <div class="footer-link-items">
            <h2>Misc Skills</h2>
            <Link to="/about">Multi-Tasking</Link>
            <Link to="/about">Googling</Link>
            <Link to="/about">Youtubing</Link>
            <Link to="/about">Customer Service</Link>
            <Link to="/about">Cooking</Link>
            <Link to="/about">Tinkering</Link>
            <Link to="/about">Home improvements</Link>
         </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo"></div>
          <div class="social-icons"></div>
        </div>
      </section>
    </div>
  );
}
export default Footer2;
