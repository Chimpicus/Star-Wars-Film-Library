import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";


function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <h1>Star Wars - Film Library</h1>
        </div>
        
        <Navbar/>
        <div className="conent">
          <Routes>
            <Route exact path="/" element={<Home/>}>
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
