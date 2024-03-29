import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import About from './component/About'
import Home from './component/Home'
import NoteState from './context/notes/NoteState'
import Alert from './component/Alert'
import Login from './component/Login'
import Signup from './component/Signup'
import { useState } from 'react'
import Logout from './component/Logout'
import Footer from './component/Footer'

function App () {
  const [alert, setAlert] = useState(null)

  const showAlert = (type, msg) => {
    setAlert({ message: msg, type: type })
  }
  setTimeout(() => {
    setAlert(null)
  }, 1000)
  return (
    <>
      <NoteState>
        <Router>
          <Navbar></Navbar>
          <Alert alert={alert} />
          <Alert message={'amazing'} />
          <div className='container main-body'>
            <Routes>
              <Route
                path='/'
                element={
                  localStorage.getItem('token') ? (
                    <Home showAlert={showAlert} />
                  ) : (
                    <Login showAlert={showAlert} />
                  )
                }
              ></Route>
              <Route path='/about' element={<About />}></Route>
              <Route
                path='/login'
                element={<Login showAlert={showAlert} />}
              ></Route>
              <Route
                path='/signup'
                element={<Signup showAlert={showAlert} />}
              ></Route>
              <Route
                path='/logout'
                element={<Logout showAlert={showAlert} />}
              ></Route>
            </Routes>
          </div>
          <Footer />
        </Router>
      </NoteState>
    </>
  )
}

export default App
