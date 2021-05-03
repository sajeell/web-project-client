import { Link } from 'react-router-dom'
import './Result.scss'

export default function Result() {
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
            <tr>
              <th>S. #</th>
              <th>Exam Title</th>
              <th>Time To Attempt</th>
              <th>Date</th>
              <th>Examiner</th>
              <th>Marks Obtained</th>
              <th>Total</th>
              <th>Percentage</th>
              <th></th>
            </tr>
            <tr>
              <td>1</td>
              <td>Data Structurs & Algorithm</td>
              <td>180 Minutes</td>
              <td>5/3/2021</td>
              <td>Dr. David Gustavo</td>
              <td>56</td>
              <td>100</td>
              <td>56%</td>
              <td
                id='certificate-btn'
                onClick={() => {
                  window.open('/certificate')
                }}
              >
                CERTIFICATE
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}
