import { Link } from 'react-router-dom'
import { useQuery } from 'urql'

import { firebase } from '@firebase/app'

import './Result.scss'

export default function Result() {

  const userId = firebase.auth().currentUser.uid

  const resultQuery = `
        query {
            result(user_id: ${JSON.stringify(userId)}) {
                      id
                      quiz_title
                      author
                      marks_obtained
                      total_marks
                      createdAt
                 }
              }
    `
  localStorage.setItem('user', firebase.auth().currentUser.email)
  const [result, reexecuteQuery] = useQuery({
    query: resultQuery,
  })

  const { data, fetching, error } = result

  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>

  return (
    <div className='result-wrapper'>
      <div className='breadcrumb'>
        <Link to='/'>
          <span className='breadcrumb-item'>Dashboard</span>
        </Link>
        <span className='breadcrumb-item'>→</span>
        <span className='breadcrumb-item'>Result</span>
      </div>
      <div className='result-content'>
        <div className='result-heading'>
          <span>Result</span>
        </div>
        <div className='result-table'>
          <table>
            <thead>
              <tr>
                <th>S. #</th>
                <th>Exam Title</th>
                <th>Date</th>
                <th>Examiner</th>
                <th>Marks Obtained</th>
                <th>Total</th>
                <th>Percentage</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.result.map((result) => (
                <tr key={result.id}>
                  <td>{result.id}</td>
                  <td>{result.quiz_title}</td>
                  <td>{result.createdAt}</td>
                  <td>{result.author}</td>
                  <td>{result.marks_obtained}</td>
                  <td>{result.total_marks}</td>
                  <td>{parseInt(result.marks_obtained) / parseInt(result.total_marks)} %</td>
                  <td
                    id='certificate-btn'
                    onClick={() => {
                      localStorage.setItem('quizTitle', result.quiz_title)
                      localStorage.setItem('percentage', parseInt(result.marks_obtained) / parseInt(result.total_marks))
                      localStorage.setItem('date', result.createdAt)
                      window.open('/certificate')
                    }}
                  >
                    CERTIFICATE
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
