import React from "react";
import { Link } from "react-router-dom";

function CardItem4(props) {
  return (
    <>
      <li className="cards__item">
        <Link
          className="cards__item__link"
          to={{
            pathname: "https://ipfs.io/ipfs/QmYPTbT6Q1aVCsekE8ZzfjJu9h9gjd4oTswHLJ6JBAyfku",
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

export default CardItem4;
