import React from 'react'

export default function UserQuestion({ question, handleQuestionChange }) {

    function handleChange(e) {
        handleQuestionChange({content: e.target.value, submitted: false})
    }

    function handleSubmit(e) {
        e.preventDefault()
        handleQuestionChange({content: question.content, submitted: true})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea placeholder={question.content} onChange={handleChange}/>
                <input type="submit" value="get wisdom"/>
            </form>
        </div>
    )
}