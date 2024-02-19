import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = props => {
  const navigate = useNavigate()
  const [cred, setCred] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const onChange = e => {
    setCred({ ...cred, [e.target.name]: e.target.value })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/createuser`,
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            name: cred.name,
            email: cred.email,
            password: cred.password
          })
        }
      )
      const data = await response.json()
      if (data.authToken) {
        props.showAlert('success', 'Signup success')
        localStorage.setItem('token', data.authToken)
        navigate('/')
      } else {
        props.showAlert('danger', 'Signup failed')
      }
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            aria-describedby='name'
            name='name'
            onChange={onChange}
            value={cred.name ? cred.name : ''}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            name='email'
            onChange={onChange}
            value={cred.email ? cred.email : ''}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            required={true}
            minLength={5}
            onChange={onChange}
            value={cred.password ? cred.password : ''}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword2' className='form-label'>
            Re-type Password
          </label>
          <input
            type='password'
            className='form-control'
            id='password2'
            name='password2'
            required={true}
            minLength={5}
            onChange={onChange}
            value={cred.password2 ? cred.password2 : ''}
          />
        </div>
        <p style={{ color: 'red' }}>
          {cred.password !== cred.password2 ? 'Password must be same' : ''}
        </p>
        <button
          disabled={cred.password === cred.password2 ? false : true}
          type='submit'
          className='btn btn-primary'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Signup
