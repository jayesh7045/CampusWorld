import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Frontend/Components/Navbar";
import Home from "./Frontend/Screens/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/home"  Component={Home}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  ); 
}

export default App;
