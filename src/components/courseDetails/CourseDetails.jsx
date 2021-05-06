import { Fragment } from 'react'
import { useQuery } from 'urql'
import { Link } from 'react-router-dom'
import './CourseDetails.scss'

const QuizQuery = `
  query {
    quizDetails(id: ${localStorage.getItem('quizId')}) {
      id
      title
      author
      price
      pre_req
      benefits
    }
  }
`

export default function CourseDetails() {
  const [result, reexecuteQuery] = useQuery({
    query: QuizQuery,
  })

  const { data, fetching, error } = result

  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>

  return (
    <div className='course-details-wrapper'>
      <div className='breadcrumb'>
        <Link to='/'>
          <span className='breadcrumb-item'>Dashboard</span>
        </Link>
        <span className='breadcrumb-item'>→</span>
        <span className='breadcrumb-item'>Course Details</span>
      </div>
      <div className='course-detail-wrapper'>
        <Fragment>
          {data.quizDetails.map((quiz) => (
            <div className='course-detail'>
              <div className='course-detail-row'>
                <div className='course-detail-row-heading'>Title</div>
                <div className='course-detail-row-content'>{quiz.title}</div>
              </div>
              <div className='course-detail-row'>
                <div className='course-detail-row-heading'>Cost</div>
                <div className='course-detail-row-content'>
                  {quiz.price}$ USD
                </div>
              </div>
              <div className='course-detail-row'>
                <div className='course-detail-row-heading'>Author</div>
                <div className='course-detail-row-content'>{quiz.author}</div>
              </div>
              <div className='course-detail-row'>
                <div className='course-detail-row-heading'>Prerequisites</div>
                <div className='course-detail-row-content'>{quiz.pre_req}</div>
              </div>
              <div className='course-detail-row'>
                <div className='course-detail-row-heading'>Benefits</div>
                <div className='course-detail-row-content'>{quiz.benefits}</div>
              </div>
              <div className='course-detail-row'>
                <div className='course-detail-row-heading'>Time to attempt</div>
                <div className='course-detail-row-content'>180 Minutes</div>
              </div>
            </div>
          ))}
        </Fragment>
        <div className='course-footage'>
          <div className='course-footage-row'>DEMO</div>
          <div className='course-footage-row'>
            <video width='300' height='200' controls>
              <source
                src='https://www.w3schools.com/html/mov_bbb.mp4'
                type='video/mp4'
              ></source>
              Your browser does not support the video tag.
            </video>
          </div>
          <Link to='/payment'>
            <div className='course-footage-row'>PAY NOW</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
