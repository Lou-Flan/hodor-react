import React from 'react'

export default function HodorReply({ question }) {
    
    function hodorSpeak(text) {
        let hodorReply = []
        for (let i = 0; i < text.split(" ").length; i++) {
            hodorReply.push("Hodor ")
        }
        console.log(hodorReply.join(" "))
        return hodorReply.join(" ")
    }


    return (
        <div  className="reply" >
            <p>{ question.submitted && hodorSpeak(question.content)}</p>
        </div>
    )
}