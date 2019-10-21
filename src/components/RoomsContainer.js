import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { withRoomConsumer } from "../contexts/RoomProvider";
import Loading from "./Loading";

const RoomsContainer = ({ context }) => {
  const { loading, sortedRooms, rooms } = context;
  if (loading) return <Loading />;
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
};

export default withRoomConsumer(RoomsContainer);

// const RoomsContainer = () => {
//   return (
//     <RoomContext.Consumer>
//       {value => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) return <Loading />;
//         return (
//           <div>
//             rooms container
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomContext.Consumer>
//   );
// };
