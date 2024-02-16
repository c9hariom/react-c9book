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


function App() {
  return (
    <>
     <NoteState>
        <Router>
            <Navbar></Navbar>
            <div className="container">
              <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
              </Routes>
            </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
