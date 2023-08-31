import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Componets/Login/Login";
import Dashboard from "./Componets/Dashboard";
import Home from "./Componets/Home";

function App() {
  const linkStyle = {
    textDecoration: "none",
    color: "blue",
    margin: "0 2rem",
  };
  return (
    <div className="App">
      <Router>
        <ul className="App-header">
          <li>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" style={linkStyle}>
              Login
            </Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
