import { Fragment, useState } from 'react'
import { useQuery, useMutation } from 'urql'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import './NormalQuiz.scss'

export default function NormalQuiz() {
  const [questionId, setQuestionId] = useState(1)
  const [quizTotalMarks, setQuizTotalMarks] = useState(
    localStorage.getItem('quizTotalMarks'),
  )
  const [quizTotalQuestions, setQuizTotalQuestions] = useState(
    localStorage.getItem('quizTotalQuestions'),
  )
  const [choiceIsTrue, setChoiceIsTrue] = useState(false)
  const [marksObtained, setMarksObtained] = useState(0)

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

  const uploadResult = `
      mutation ($userId: Int!, $quizTitle: String!, $author: String!, $marksObtained: Int!, $totalMarks: Int!) {
        uploadResult (data: {userId: $userId, quizTitle: $quizTitle, author: $author, marksObtained: $marksObtained, totalMarks: $totalMarks}) {
          userId
          quizTitle
          author
          marksObtained
          totalMarks
        }
      }
  `

  const [uploadResultResponse, uploadResultMutation] = useMutation(uploadResult)

  const [result, reexecuteQuery] = useQuery({
    query: QuestionQuery,
  })

  const { data, fetching, error } = result

  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>

  if (questionId != quizTotalQuestions) {
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
              <div
                className='normal-quiz-answer'
                onClick={() => {
                  if (data.question.choice_1.correct) {
                    setChoiceIsTrue(true)
                  } else {
                    setChoiceIsTrue(false)
                  }
                }}
              >
                <div className='normal-quiz-answer-left'>
                  <input type='radio' name='answer' id='answer' />
                </div>
                <div className='normal-quiz-answer-right'>
                  <span>{data.question.choice_1.title}</span>
                </div>
              </div>
              <div
                className='normal-quiz-answer'
                onClick={() => {
                  if (data.question.choice_2.correct) {
                    setChoiceIsTrue(true)
                  } else {
                    setChoiceIsTrue(false)
                  }
                }}
              >
                <div className='normal-quiz-answer-left'>
                  <input type='radio' name='answer' id='answer' />
                </div>
                <div className='normal-quiz-answer-right'>
                  <span>{data.question.choice_2.title}</span>
                </div>
              </div>
              <div
                className='normal-quiz-answer'
                onClick={() => {
                  if (data.question.choice_3.correct) {
                    setChoiceIsTrue(true)
                  } else {
                    setChoiceIsTrue(false)
                  }
                }}
              >
                <div className='normal-quiz-answer-left'>
                  <input type='radio' name='answer' id='answer' />
                </div>
                <div className='normal-quiz-answer-right'>
                  <span>{data.question.choice_3.title}</span>
                </div>
              </div>
              <div
                className='normal-quiz-answer'
                onClick={() => {
                  if (data.question.choice_4.correct) {
                    setChoiceIsTrue(true)
                  } else {
                    setChoiceIsTrue(false)
                  }
                }}
              >
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
            <input
              type='submit'
              value='Next Question'
              onClick={(e) => {
                e.persist()
                if (choiceIsTrue) {
                  localStorage.setItem('marksObtained', marksObtained + 1)
                } else {
                  localStorage.setItem('marksObtained', marksObtained)
                }
                setQuestionId(questionId + 1)
              }}
            />
          </div>
        </div>
      </div>
    )
  } else if (questionId == quizTotalQuestions) {
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
              <div
                className='normal-quiz-answer'
                onClick={() => {
                  if (data.question.choice_1.correct) {
                    setChoiceIsTrue(true)
                  } else {
                    setChoiceIsTrue(false)
                  }
                }}
              >
                <div className='normal-quiz-answer-left'>
                  <input type='radio' name='answer' id='answer' />
                </div>
                <div className='normal-quiz-answer-right'>
                  <span>{data.question.choice_1.title}</span>
                </div>
              </div>
              <div
                className='normal-quiz-answer'
                onClick={() => {
                  if (data.question.choice_2.correct) {
                    setChoiceIsTrue(true)
                  } else {
                    setChoiceIsTrue(false)
                  }
                }}
              >
                <div className='normal-quiz-answer-left'>
                  <input type='radio' name='answer' id='answer' />
                </div>
                <div className='normal-quiz-answer-right'>
                  <span>{data.question.choice_2.title}</span>
                </div>
              </div>
              <div
                className='normal-quiz-answer'
                onClick={() => {
                  if (data.question.choice_3.correct) {
                    setChoiceIsTrue(true)
                  } else {
                    setChoiceIsTrue(false)
                  }
                }}
              >
                <div className='normal-quiz-answer-left'>
                  <input type='radio' name='answer' id='answer' />
                </div>
                <div className='normal-quiz-answer-right'>
                  <span>{data.question.choice_3.title}</span>
                </div>
              </div>
              <div
                className='normal-quiz-answer'
                onClick={() => {
                  if (data.question.choice_4.correct) {
                    setChoiceIsTrue(true)
                  } else {
                    setChoiceIsTrue(false)
                  }
                }}
              >
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
            <input
              type='submit'
              value='Submit'
              onClick={() => {
                if (choiceIsTrue) {
                  localStorage.setItem(
                    'marksObtained',
                    parseInt(localStorage.getItem('marksObtained')) + 1,
                  )
                } else {
                  localStorage.setItem(
                    'marksObtained',
                    parseInt(localStorage.getItem('marksObtained')),
                  )
                }
                const variables = {
                  userId: 1,
                  quizTitle: localStorage.getItem('quizTitle'),
                  author: localStorage.getItem('quizAuthor'),
                  marksObtained: parseInt(
                    localStorage.getItem('marksObtained'),
                  ),
                  totalMarks: parseInt(quizTotalMarks),
                }
                uploadResultMutation(variables).then((result) => {
                  toast.success('Submitted Successfully')

                  localStorage.removeItem('marksObtained')
                  localStorage.removeItem('quizTitle')
                  localStorage.removeItem('quizId')
                  localStorage.removeItem('quizAuthor')
                  localStorage.removeItem('quizTotalMarks')
                  localStorage.removeItem('quizTotalQuestions')
                  window.close()
                  window.open('/')
                })
              }}
            />
          </div>
        </div>
        <ToastContainer />
      </div>
    )
  }
}
