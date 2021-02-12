import React, { useState, useEffect } from 'react'
import { useRooms } from "../../hooks"


function RoomList() {
    const { getRooms } = useRooms()
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        getRooms().then(res => {
            setRooms(res.data.results)
        })
    }, [])

    return (
        <div>
            Rooms:
            {
                rooms.map(room => (
                    <div>
                        <a href={`/room/${room.id}`}>{room.name}</a>
                    </div>
                ))
            }
        </div>
    )
}

export default RoomList
