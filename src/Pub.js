import React, { useEffect, useState } from 'react'

import PubNubReact from 'pubnub-react'

export default function Pub(props){

    const [msg , setMessage] =  useState("")
    const pubnub = new PubNubReact({
        publishKey: 'pub-c-af9e408a-d4a8-473c-b591-81402cdf9aaf'
    });

    pubnub.init(Pub);

    useEffect(() => {
        pubnub.
    })

    return(
        <div>
            <button onClick={() => {setMessage("Hello There")}}>
                Click me!
            </button>
        </div>
    )
}