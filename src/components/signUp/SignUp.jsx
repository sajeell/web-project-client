import { Link } from 'react-router-dom';
import './SignUp.scss';

import FormBG from '../../static/images/form-bg.png';

export default function SignUp() {
  document.title = 'Sign Up';
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
              placeholder='Email Address'
            />
          </div>
          <div className='signup-row-5'>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
            />
          </div>
          <div className='signup-row-6'>
            <input
              type='submit'
              name='submit-btn'
              id='submit-btn'
              value='Sign Up'
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
  );
}
