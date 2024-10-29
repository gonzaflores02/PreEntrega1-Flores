import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ title, price, stock, image, id }) => {
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="card-info">
        <h1>{title}</h1>
        <h3>${price}</h3>
        <h4>{stock} Unidades disponibles</h4>
      </div>
      <Link to={`/itemdetail/${id}`}>
        <button>Ver Detalles</button>
      </Link>
    </div>
  );
};

export default Card;
