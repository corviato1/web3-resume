import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <img className="abouta" src="images/about-me.jpg" />
        <p className="footer-subscription-heading">Bio</p>
        <p className="footer-subscription-text">
          Hello!  My name is Michael Newton.  Apart from agricultural engineering, I'm an explorer of the web3 seas, spending my free time exploring, developing, supporting, and evangelizing Web3 technology.
          <br></br>
          <br></br>As an adolescent I excelled in exploring life, attaining the honor of Eagle Scout within the Boy Scouts of America, maximized my life experiences and perception.
          <br></br>
          <br></br>As an adult, I held several jobs but only two career passions.
          The jobs I've held include the following: Home Depot, real estate support, and various agricultural jobs.
          These jobs have given me eight plus years of customer service experience which, among other things, improved both my technical and team building skills.
          <br></br>
          <br></br>My first life passion is building within the agricultural industry.
          That passion has led to three utility patents that perfectly utilize indoor agriculture within confined spaces.  They are best leveraged when applied to cargo ship farms, and growing produce in Outer space.
          <br></br>
          <br></br>After falling in love with the production and logistics process of the agricultural industry, I found Web3.  Prior to that, I had no interest in technology as I was acutely aware that the vast majority of the people who use the web own none of it, including things they think they do.  Because of this, I wanted no part in the development of that world.  
          Enter my first real exposure to the internet of the people, ie; publicly secured blockchains, and open source swarm technology.
          After the realization that I can plant my digital flag and own my own digital space of the web, and more importantly gift it to others, I ran as fast as I could into that potential new reality.
          Then I found the InterPlanetary File System and my heart for the first time ever found love of a software.  If IPFS is the hill I die on, then it will be a life well spent.  The opportunity to truly own my own data on a decentralized peer to peer protocol and share it with the world is one of the most magical things in my opinion.  Over the years, I have built and tinkered with some DApps and public blockchains.  Nothing for income (other than mining), just to build and learn so that I may expand my horizons and share what I learn with others.
          <br></br>
          <br></br>I am a firm believer that learning, and then teaching, self sufficiency is one of the best ways to improve oneself and the world we live in.
          <br></br>
          <br></br>As for my work life:
          My determination and patience are without limits.  I excel in team environments, while at the same time having dialed and maximized my productivity working on projects alone.  Remote work comes natural to me and a process that I thrive on.  One of my strengths is recognizing what project path works best at any given time: be it the soft and humorous touch, or the head down heavy grind.  I have an adept ability to know when to focus on the tree, and when to focus on the forest.  Among other things, I try to never waste a lesson the universe presents on my life journey. 
          <br></br>
          <br></br>Current favorite song = <a href="https://www.youtube.com/watch?v=3sCbuOO7YqY" target="_blank">EVERYTHING'S A SCAM</a>
          <br></br>Current mantra = <a href="https://www.urbandictionary.com/define.php?term=Web3" target="_blank">Web3</a> or bust
          <br></br>
          Contact info:<br></br>
          <br></br> email: michaelnewton@cox.net <br></br>
          <br></br>phone: 949-463-4550<br></br>
          <br></br>
          slack: @Mike
        </p>
      </section>

      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Thank you for your time!
            </Link>
          </div>
          <small class="website-rights"></small>
          <div class="social-icons">
            <Link
              class="social-icon-link github"
              to={{
                pathname: "https://github.com/corviato1",
              }}
              target="_blank"
              aria-label="github"
            >
              <i class="fab fa-github" />
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
