import React from "react";
import { Link } from "react-router-dom";
import { defaultImg } from "../imageSouce";
import PropTypes from "prop-types";

const Room = ({ room }) => {
  const { name, slug, images, price } = room;
  return (
    <article>
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>pernight</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};

export default Room;

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
