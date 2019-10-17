import React, { Component } from "react";
import { Link } from "react-router-dom";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "./../components/Hero";
import Banner from "./../components/Banner";

import RoomContext from "./../contexts/RoomProvider";
import Loading from "./../components/Loading";

export class SingleRoom extends Component {
  state = {
    slug: this.props.match.params.slug,
    defaultBcg,
    loading: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const { slug, loading } = this.state;
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

    return (
      <Hero hero="roomsHero">
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </Banner>
      </Hero>
    );
  }
}

export default SingleRoom;
