import { Link } from 'react-router-dom'
import './CourseDetails.scss'

export default function CourseDetails() {
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
        <div className='course-detail'>
          <div className='course-detail-row'>
            <div className='course-detail-row-heading'>Title</div>
            <div className='course-detail-row-content'>
              Data Structures & Algorithm
            </div>
          </div>
          <div className='course-detail-row'>
            <div className='course-detail-row-heading'>Cost</div>
            <div className='course-detail-row-content'>50$ USD</div>
          </div>
          <div className='course-detail-row'>
            <div className='course-detail-row-heading'>Author</div>
            <div className='course-detail-row-content'>Dr. David Gustavo</div>
          </div>
          <div className='course-detail-row'>
            <div className='course-detail-row-heading'>Prerequisites</div>
            <div className='course-detail-row-content'>
              Knowledge of OOP, Coding
            </div>
          </div>
          <div className='course-detail-row'>
            <div className='course-detail-row-heading'>Benefits</div>
            <div className='course-detail-row-content'>
              You may be new to Data Structure or you have already Studied and
              Implemented Data Structures but still you feel you need to learn
              more about Data Structure in detail so that it helps you solve
              challenging problems and used Data Structure efficiently. This 53
              hours of course covers each topic in greater details, every topic
              is covered on Whiteboard which will improve your Problem Solving
              and Analytical Skills. Every Data Structure is discussed, analysed
              and implemented with a Practical line-by-line coding.
            </div>
          </div>
          <div className='course-detail-row'>
            <div className='course-detail-row-heading'>Time to attempt</div>
            <div className='course-detail-row-content'>180 Minutes</div>
          </div>
        </div>
        <div className='course-footage'>
          <div className='course-footage-row'>EXAMINER</div>
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
