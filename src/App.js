import React from 'react'

import SingleQuestion from './components/SingleQuestion';

import questions from './data'

const App = () => {
  return (
    <main>
      <div className="container">
        <h2>Frequently Asked Interview Question</h2>
        <section className="info">
          {
            questions.map((question)=>{
              return <SingleQuestion key = {question.id} {...question}/>
            })
          }
        </section>
      </div>
    </main>
  )
}

export default App