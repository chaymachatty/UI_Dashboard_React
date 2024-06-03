import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div>
        <div className="header" >
            <Header/>
        </div>
        <div className="home">
            <Home />
        </div>
    </div>
  );
}

export default App;