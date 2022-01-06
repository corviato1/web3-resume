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
        <ul></ul>
        <p>
         
        </p>
        <br></br>
        <br></br>
      </section>

      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Web3</h2>
            <Link to="/services">Early adopter of ENS</Link>   
            <Link to="/services">Filecoin Space Race community advocate</Link>
            <Link to="/services">Filecoin genesis(Pre Space Race & Space Race) miner</Link>
            <Link to="/services">Fought for equal air drop for small miners that led to second fellowship opportunity</Link>
            <Link to="/services">Featured on several C3 Media Podcasts, including ones with core devs of Ravencoin, and other chains</Link>
            <Link to="/services">Early adopter/developer (including airdrops) of Ravencoin</Link>   
            <Link to="/services">IPFS user and developer/Link>
            <Link to="/services">Creator of NFT featured at 2nd annual meetup</Link>
            <Link to="/services">Miner of several chains; CPU, GPU, Storage, & ASIC</Link>
            <Link to="/services">Windows & Linux</Link>
            <Link to="/services">DApp developer & maker</Link>
          </div>
          <div class="footer-link-items">
            <h2>Agricultural</h2>
            <Link to="/services">Designer and holder of 3 utilty patents</Link>
            <Link to="/services">Aided in many crops, seed to harvest</Link>
            <Link to="/services">Understanding of Pest Management</Link>
            <Link to="/services">Strong understanding of Hydroponics</Link>
            <Link to="/services">Intermediate builder of Aquaponics</Link>
            <Link to="/services">Explorer of better techniques</Link>
            <Link to="/services">Work experience greater than a decade</Link>
            <Link to="/services">Bridging agriculture projects with Web3 DApps in as many ways as possible</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Information Technology</h2>
            <Link to="/services">Computer Builder</Link>
            <Link to="/services">Ticketing Systems</Link>
            <Link to="/services">Customer Service</Link>
            <Link to="/services">Data backups</Link>
            <Link to="/services">Video Conferencing</Link>
            <Link to="/services">Remote troubleshhoting</Link>
            <Link to="/services">Javascript, Solidity, HTML, CSS</Link>
            <Link to="/services">Helpdesk and Software Support</Link>
            <Link to="/services">Servers and Workstations</Link>
          </div>
          <div class="footer-link-items">
            <h2>Misc Skills</h2>
            <Link to="/services">Multi-Tasking</Link>
            <Link to="/services">Cryptocurrency Mining</Link>
            <Link to="/services">Googling</Link>
            <Link to="/services">Youtubing</Link>
            <Link to="/services"></Link>
            <Link to="/services">Cooking</Link>
            <Link to="/services">Tinkering</Link>
            <Link to="/services">Home improvments</Link>
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
