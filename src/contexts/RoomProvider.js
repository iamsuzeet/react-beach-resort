import React, { Component } from "react";
import items from "../data";

//context api
const RoomContext = React.createContext();

//<RoomContext.Provider value={'hello}

export class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  };

  //get Data

  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    this.setState({ rooms, featuredRooms, sortedRooms: rooms, loading: false });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let rooms = { ...item.fields, images, id };
      return rooms;
    });

    return tempItems;
  }

  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export default RoomContext;
