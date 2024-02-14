import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route } 
  from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./component/About";


function App() {
  return (
    <>
        <Router>
            <Navbar></Navbar>
            <Routes>
                <Route path="/about" element={<About/>}></Route>
            </Routes>
        </Router>
        </>
  );
}

export default App;
