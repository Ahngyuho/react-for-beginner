// import logo from './logo.svg';
// import './App.css';
//import Button from "./Button";
//import styles from "./App.module.css";
import { useState , useEffect } from "react";
import  Movie from "./components/Movie";
import Home from "./routes/Home";
import Detail from "./routes/Detail"

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

//이제 App()는 router를 render하게 됨
function App() {
  return <Router>
    <Switch>
      <Route path = "/movie/:id"> 
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>;
}

export default App;