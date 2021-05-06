import { Fragment } from 'react'
import { useQuery } from 'urql'

import './Dashboard.scss'

const QuizQuery = `
  query {
    quiz {
      id
      title
      author
      price
    }
  }
`

export default function Dashboard() {
  const [result, reexecuteQuery] = useQuery({
    query: QuizQuery,
  })

  const { data, fetching, error } = result

  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>

  return (
    <div className='dashboard-wrapper'>
      <div className='breadcrumb'>
        <span>Dashboard</span>
      </div>
      <div className='dashboard-welcome'>
        <span className='dashboard-welcome-item'>Welcome,</span>
        <span className='dashboard-welcome-item'>Sajeel Ahmad</span>
      </div>

      <div className='dashboard-exams'>
        <div className='dashboard-exams-heading'>
          <span>Trending Exams</span>
        </div>
        <div className='dashboard-exams-boxes'>
          {data.quiz.map((quiz) => (
            <Fragment key={quiz.id}>
              <div
                className='dashboard-exam-box'
                onClick={() => {
                  localStorage.setItem('quizId', quiz.id)
                  localStorage.setItem('quizTotalMarks', quiz.total_marks)
                  localStorage.setItem(
                    'quizTotalQuestions',
                    quiz.total_questions,
                  )
                  window.open('/course-details')
                }}
              >
                <div className='dashboard-exam-box-item'>
                  <span>{quiz.title}</span>
                </div>
                <div className='dashboard-exam-box-item'>
                  <span>By {quiz.author}</span>
                </div>
                <div className='dashboard-exam-box-item'>
                  <span>{quiz.price}/- USD</span>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
