import React from "react";
import { Link } from "react-router-dom";

function CardItem3(props) {
  return (
    <>
      <li className="cards__item">
        <Link
          className="cards__item__link"
          to={{
            pathname: "https://techcrunch.com/2018/07/07/watch-all-the-interviews-from-techcrunch-sessions-blockchain/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+Techcrunch+(TechCrunch)&utm_conten",
          }}
          target="_blank"
        >
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img className="cards__item__img" alt="Projects" src={props.src} />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem3;
