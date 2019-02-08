import React, { useEffect, useState } from 'react'

import PubNub from 'pubnub'

export default function Sub(props){

    const [response, setResponse] = useState("New messages will be displayed here!")

    var pubnub = new PubNub({
        subscribeKey: "sub-c-7e76d5bc-2658-11e9-9508-c2e2c4d7488a",
    })

    useEffect(() => {
        pubnub.addListener({
            status: function(statusEvent) {
                if (statusEvent.category === "PNConnectedCategory") {
                }
            },
            message: function(msg) {
                setResponse(msg.message.text)
            }
        })      
        pubnub.subscribe({
            channels: ['Channel1'] 
        });
    })

    return(
        <h1>
            {response}
        </h1>
    )
}