import React, { Component } from "react";
import { Link } from "react-router-dom";

import { defaultImg } from "../imageSouce";

// import Hero from "./../components/Hero";
import Banner from "./../components/Banner";

import RoomContext from "./../contexts/RoomProvider";
import Loading from "./../components/Loading";
import StyledHero from "./../components/StyledHero";

export class SingleRoom extends Component {
  state = {
    slug: this.props.match.params.slug,
    defaultImg
  };

  static contextType = RoomContext;

  render() {
    const { getRoom, loading } = this.context;
    const { slug } = this.state;
    const room = getRoom(slug);
    if (!room) {
      return (
        <div className="error">
          {loading ? (
            <Loading />
          ) : (
            <>
              <h3>Something went wrong. Couldn't find room.</h3>
              <Link to="/room" className="btn-primary">
                Go Back
              </Link>
            </>
          )}
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;

    const [mainImg, ...defaultImg] = images;

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg} hero="roomsHero">
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to Rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => (
              <img src={item} alt={name} key={index} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>price : ${size} SQFT</h6>
              <h6>
                max capacity: {capacity} {capacity > 1 ? "people" : "person"}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleRoom;
