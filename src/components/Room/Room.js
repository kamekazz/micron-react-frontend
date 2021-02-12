import React, { useState, useEffect } from 'react'
import { useRooms } from ".././../hooks"
import { TextField, Typography, Grid, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    input: {
        background: "red",
    },
    messages: {
        maxHeight: "300px",
        overflowY: "scroll"
    },
    bottom: {
        height: "20px",
    },
    root: {
        height: "100vh",
        width: "100vw",
    }
}))

function Room() {
    const { getRoomMessages, sendMessage } = useRooms()
    const [messages, setMessages] = useState([])
    const [userInput, setUserInput] = useState("")
    const [roomName, setRoomName] = useState("")

    const classes = useStyles()

    useEffect(() => {
        loadMessages()

    }, [])
    
    function loadMessages() {
        getRoomMessages().then(res => {
            setRoomName(res.data.name)
            setMessages(res.data.messages.reverse())
            scrollToChatEdge()
        }).catch(err => {
            throw err
        })
    }

    function handleSendMessage() {
        sendMessage(userInput).then(() => {
            scrollToChatEdge()
            setUserInput("")
            loadMessages()
        })
    }
    function scrollToChatEdge() {
        document.querySelector('#messages-bottom').scrollIntoView()

    }

    function handleUserInput(e) {
        setUserInput(e.target.value)
    }

    function handleUserKeyDown(e) {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    }

    return (
        <Grid container>

            <Grid item xs={12}>
                <Typography>
                    {roomName}
                </Typography>
            </Grid>


            <Grid id="messages" item xs={12} className={classes.messages}>
                {messages.map(message => {
                    return (
                        <div>
                            {message.text}
                        </div>
                    )
                })}
                <div id="messages-bottom" className={classes.bottom}></div>
            </Grid>

            <div className={classes.input}>
                <TextField value={userInput} onChange={handleUserInput} onKeyDown={handleUserKeyDown}>
                </TextField>
                <button onClick={handleSendMessage}>
                    send
                        </button>
            </div>
        </Grid>
    )
}

export default Room
