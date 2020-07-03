import React, { useState } from 'react'
import UserQuestion from './components/UserQuestion'
import HodorReply from './components/HodorReply'

const App = () => {
  const [question, setQuestion] = useState({ content: "ask hodor a question...", submitted:false})

  function handleQuestionChange(newQuestion) {
    setQuestion(newQuestion)
  }

  return (
    <div >
      <UserQuestion question={question} handleQuestionChange={handleQuestionChange} />
      <HodorReply question={question} />
    </div>
  )
}

export default App
