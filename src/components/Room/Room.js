import React, { useState, useEffect } from 'react'
import { useRooms } from ".././../hooks"

function Room() {
    const { getRoomMessages, sendMessage } = useRooms()
    const [messages, setMessages] = useState([])

    useEffect(() => {
        getRoomMessages().then(res => {
            console.log(res)
            setMessages(res.data.messages)
        }).catch(err => {
            throw err
        })
    }, [])

    function handleSendMessage(){
        sendMessage("react")
    }


    return (
        <div>
            Room
            
            {messages.map(message => {
                return (
                    <div>
                        {message.text}
                    </div>
                )
            })}

            <button onClick={handleSendMessage}>
                send
            </button>
        </div>
    )
}

export default Room
