import questions from './data'
import { useState } from 'react'
import Question from './Question'
const App = () => {
  const [questionId, setQuestionId] = useState(null)

  const handleClick = id => {
    if (questionId !== id) return setQuestionId(id)
    return setQuestionId(null)
  }

  return (
    <main>
      <section className='container'>
        <h1>Questions</h1>
        {questions.map(question => (
          <Question key={question.id} {...question} questionId={questionId} handleClick={handleClick} />
        ))}
      </section>
    </main>
  )
}
export default App
