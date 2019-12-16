import React from "react";
import { withRoomConsumer } from "../context";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import Loading from "../components/Loading";

const RoomContainer = ({ context }) => {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  console.log(sortedRooms);
  return (
    <div>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </div>
  );
};

export default withRoomConsumer(RoomContainer);

// import React from "react";
// import { RoomConsumer } from "../context";
// import RoomFilter from "./RoomFilter";
// import RoomList from "./RoomList";
// import Loading from "../components/Loading";

// const RoomContainer = () => {
//   return (
//     <RoomConsumer>
//       {value => {
//         // where value = state as per context;

//         const { loading, rooms, sortedRooms } = value;

//         if (loading) {
//           return <Loading />;
//         }

//         return (
//           <div>
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// };

// export default RoomContainer;
// getting to state in a functiona component
// using RoomConsumer/wrapping  value function --> that renders components or jsx
