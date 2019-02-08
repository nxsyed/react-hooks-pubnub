import React, { useEffect, useState } from 'react'

import PubNub from 'pubnub'

export default function Pub(props){

    const [publish, setPublish] = useState(0)

    var pubnub = new PubNub({
        publishKey: "pub-c-af9e408a-d4a8-473c-b591-81402cdf9aaf",
        subscribeKey: "sub-c-7e76d5bc-2658-11e9-9508-c2e2c4d7488a"
    })

    useEffect(() => {
        var publishConfig = {
            channel : "Channel1",
            message: { 
                text: `You've Published ${publish} times!`,
            }
        }
        pubnub.publish(publishConfig, function(status, response) {
        })
    })

    return(
        <button onClick={() => {
            setPublish(publish + 1)
        }}>
            Publish to PubNub!
        </button>
    )
}