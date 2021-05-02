import { Link } from "react-router-dom"
import './Dashboard.scss';

export default function Dashboard() {
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
          <Link to="/course-details">
            <div className='dashboard-exam-box'>
              <div className='dashboard-exam-box-item'>
                <span>Data Structures & Algorithm</span>
              </div>
              <div className='dashboard-exam-box-item'>
                <span>By Dr. David Gustavo</span>
              </div>
              <div className='dashboard-exam-box-item'>
                <span>50/- USD</span>
              </div>
            </div>
          </Link>
          <div className='dashboard-exam-box'>
            <div className='dashboard-exam-box-item'>
              <span>Data Structures & Algorithm</span>
            </div>
            <div className='dashboard-exam-box-item'>
              <span>By Dr. David Gustavo</span>
            </div>
            <div className='dashboard-exam-box-item'>
              <span>50/- USD</span>
            </div>
          </div>
          <div className='dashboard-exam-box'>
            <div className='dashboard-exam-box-item'>
              <span>Data Structures & Algorithm</span>
            </div>
            <div className='dashboard-exam-box-item'>
              <span>By Dr. David Gustavo</span>
            </div>
            <div className='dashboard-exam-box-item'>
              <span>50/- USD</span>
            </div>
          </div>
          <div className='dashboard-exam-box'>
            <div className='dashboard-exam-box-item'>
              <span>Data Structures & Algorithm</span>
            </div>
            <div className='dashboard-exam-box-item'>
              <span>By Dr. David Gustavo</span>
            </div>
            <div className='dashboard-exam-box-item'>
              <span>50/- USD</span>
            </div>
          </div>
          <div className='dashboard-exam-box'>
            <div className='dashboard-exam-box-item'>
              <span>Data Structures & Algorithm</span>
            </div>
            <div className='dashboard-exam-box-item'>
              <span>By Dr. David Gustavo</span>
            </div>
            <div className='dashboard-exam-box-item'>
              <span>50/- USD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
