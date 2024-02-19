import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = props => {
  const navigate = useNavigate()
  const [cred, setCred] = useState({ email: '', password: '' })

  const onChange = e => {
    setCred({ ...cred, [e.target.name]: e.target.value })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ email: cred.email, password: cred.password })
      })
      const data = await response.json()
      if (data.authToken) {
        props.showAlert('success', 'Login success')
        localStorage.setItem('token', data.authToken)
        navigate('/')
      } else {
        props.showAlert('danger', 'Invalid credentials')
      }
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login
