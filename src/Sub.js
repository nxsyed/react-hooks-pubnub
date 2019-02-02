import React, { useEffect, useState } from 'react'

import PubNubReact from 'pubnub-react'

export default function Sub(props){

    const [response, setResponse] = useState(0)

    const pubnub = new PubNubReact({
        subscribeKey: 'sub-c-7e76d5bc-2658-11e9-9508-c2e2c4d7488a'
    });

    pubnub.init(Sub);

    useEffect(() => {
        pubnub.subscribe({
            channels: ["Channel1"]
        });
        pubnub.addListener({
            status: function(statusEvent) {
            },
            message: (message) => {
                setResponse(message.message.text)
            }
        })
    })

    return(
        <div>
            {response}
        </div>
    )
}