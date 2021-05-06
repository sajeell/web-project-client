import { Fragment, useState } from 'react'
import { useQuery } from 'urql'
import { Link } from 'react-router-dom'
import './NormalQuiz.scss'

export default function NormalQuiz() {
  const [questionId, setQuestionId] = useState(1)
  const [quizTotalMarks, setQuizTotalMarks] = useState(
    localStorage.getItem('quizTotalMarks'),
  )
  const [quizTotalQuestions, setQuizTotalQuestions] = useState(
    localStorage.getItem('quizTotalQuestions'),
  )

  const QuestionQuery = `
      query {
        question(id: ${questionId}, 
        quiz_id: ${localStorage.getItem('quizId')}) 
        {
          id
          title
          choice_1 {
            id
            title
            correct
          }
          choice_2 {
            id
            title
            correct
          }
          choice_3 {
            id
            title
            correct
          }
          choice_4 {
            id
            title
            correct
          }
        }
      }
  `

  const [result, reexecuteQuery] = useQuery({
    query: QuestionQuery,
  })

  const { data, fetching, error } = result

  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>

  console.log(data)

  return (
    <div className='normal-quiz-wrapper'>
      <div className='quiz-intro'>
        <Link to='/'>
          <h3>EVALY</h3>
        </Link>
        <span>Normal Quiz</span>
      </div>
      <div className='normal-quiz-content'>
        <div className='normal-quiz-row'>
          <span>Question {questionId}/4</span>
        </div>
        <Fragment key={data.question.id}>
          <div className='normal-quiz-row'>
            <span>{data.question.title}</span>
          </div>
          <div className='normal-quiz-row'>
            <div className='normal-quiz-answer'>
              <div className='normal-quiz-answer-left'>
                <input type='radio' name='answer' id='answer' />
              </div>
              <div className='normal-quiz-answer-right'>
                <span>{data.question.choice_1.title}</span>
              </div>
            </div>
            <div className='normal-quiz-answer'>
              <div className='normal-quiz-answer-left'>
                <input type='radio' name='answer' id='answer' />
              </div>
              <div className='normal-quiz-answer-right'>
                <span>{data.question.choice_2.title}</span>
              </div>
            </div>
            <div className='normal-quiz-answer'>
              <div className='normal-quiz-answer-left'>
                <input type='radio' name='answer' id='answer' />
              </div>
              <div className='normal-quiz-answer-right'>
                <span>{data.question.choice_3.title}</span>
              </div>
            </div>
            <div className='normal-quiz-answer'>
              <div className='normal-quiz-answer-left'>
                <input type='radio' name='answer' id='answer' />
              </div>
              <div className='normal-quiz-answer-right'>
                <span>{data.question.choice_4.title}</span>
              </div>
            </div>
          </div>
        </Fragment>
        <div className='normal-quiz-row'>
          <input type='submit' value='Next Question' />
        </div>
      </div>
    </div>
  )
}
