import React, { useState, useEffect } from "react";
import { useRooms } from "../../hooks";
import CreateRoom from "./CreateRoom/CreateRoom"

function RoomList() {
  const { getRooms } = useRooms();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    loadRooms()
  }, []);
  
  function loadRooms(){
    
    getRooms().then((res) => {
      setRooms(res.data.results);
    });
  }
  
  return (
    <div>
      Rooms:
      {rooms.map((room) => (
        <div key={room.id}>
          <a href={`/room/${room.id}`}>{room.name}</a>
        </div>
      ))}
      <CreateRoom loadRooms={loadRooms} />
    </div>
  );
}

export default RoomList;
