import { useState } from 'react'
import { Link } from 'react-router-dom'
import './SignUp.scss'
import { firebase } from '@firebase/app'

// These imports load individual services into the firebase namespace.
import 'firebase/auth'

import FormBG from '../../static/images/form-bg.png'

export default function SignUp() {
  document.title = 'Sign Up'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signUp = (e) => {
    e.preventDefault()
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user
          // ...
          console.log(user)
        })
        .catch((error) => {
          alert(error.message)
        })
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='signup-wrapper'>
      <div className='signup-bg-image'>
        <img src={FormBG} alt='Form background' />
      </div>
      <div className='signup-form'>
        <form>
          <div className='signup-row-1'>
            <span>Sign Up</span>
          </div>
          <div className='signup-row-2'>
            <input type='text' name='name' id='name' placeholder='Full Name' />
          </div>
          <div className='signup-row-3'>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='Username'
            />
          </div>
          <div className='signup-row-4'>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              placeholder='Email Address'
            />
          </div>
          <div className='signup-row-5'>
            <input
              type='password'
              name='password'
              id='password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              placeholder='Password'
            />
          </div>
          <div className='signup-row-6'>
            <input
              type='submit'
              name='submit-btn'
              id='submit-btn'
              value='Sign Up'
              onClick={signUp}
            />
          </div>
          <div className='signup-row-7'>
            <span className='signup-row-7-item'>Already have an account?</span>
            <Link to='/signin'>
              <span className='signup-row-7-item'>Sign In</span>
            </Link>
            <span className='signup-row-7-item'>here</span>
          </div>
        </form>
      </div>
    </div>
  )
}
