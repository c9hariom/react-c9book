import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route } 
  from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Home from './component/Home';
import NoteState from './context/notes/NoteState';
import Alert from './component/Alert';
import Login from './component/Login';
import Signup from './component/Signup';


function App() {
  return (
    <>
     <NoteState>
        <Router>
            <Navbar></Navbar>
            <Alert message={"amazing"}/>
            <div className="container">
              <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
              
              
              </Routes>
            </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
