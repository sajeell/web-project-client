import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

export default function Header() {
  const [isMobile, setIsMobile] = useState(false)

  document.title = 'Dashboard'

  const handeIsMobile = (e) => {
    e.preventDefault()
    setIsMobile(!isMobile)
  }

  if (window.innerWidth < 960) {
    if (!isMobile) {
      return (
        <div className='header-wrapper'>
          <div className='header'>
            <Link to='/'>
              <div className='header-title'>
                <span>EVALY</span>
              </div>
            </Link>
            <ul className='header-items'>
              <li className='header-item' onClick={handeIsMobile}>
                ᎒
              </li>
            </ul>
          </div>
        </div>
      )
    } else {
      return (
        <div className='header-wrapper'>
          <div className='header'>
            <Link to='/'>
              <div className='header-title'>
                <span>EVALY</span>
              </div>
            </Link>
            <ul className='header-items'>
              <li className='header-item' onClick={handeIsMobile}>
                ᎒
              </li>
            </ul>
          </div>
          <div className='header-menu'>
            <Link to='/result'>
              <div className='header-menu-item'>
                <span>RESULT</span>
              </div>
            </Link>
            <div className='header-menu-item'>
              <span>HELP</span>
            </div>
            <div className='header-menu-item'>
              <Link to='/signin'>
                <span>LOG OUT</span>
              </Link>
            </div>
          </div>
        </div>
      )
    }
  } else {
    return (
      <div className='header-wrapper'>
        <div className='header'>
          <Link to='/'>
            <div className='header-title'>
              <span>EVALY</span>
            </div>
          </Link>
          <ul className='header-items'>
            <Link to='/result'>
              <li className='header-item'>RESULT</li>
            </Link>
            <li className='header-item'>HELP</li>
            <Link to='/signin'>
              <li className='header-item'>LOGOUT</li>
            </Link>
          </ul>
        </div>
      </div>
    )
  }
}
