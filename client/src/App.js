import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Start from './components/Start/Start';
import Topics from "./components/topics/topics";
import { useSelector } from "react-redux";
import Question from "./components/Question/Question";
import Gameover from "./components/Gameover/Gameover";



function App() {
  const user = useSelector(state => state.user);
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/game">
            {user.name ? <Topics /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/gameover">
            {user.name ? <Gameover /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/game/:id">
            {user.name ? <Question /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/">
            <Start />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
