// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Keyword from "./compents/Keyword";
import Home from "./compents/Home"
import Number from "./compents/Number";
import Word from "./compents/Word";
function App() {

  // const Welcome = (props) =>{
  //   return(
  //     <fieldset>
  //       <legend> Welcome</legend>
  //     </fieldset>
  //   )
  // }
  // const number = (props) =>{
  //   return(
  //     <fieldset>
  //       <legend> the number is: </legend>
  //     </fieldset>
  //   )
  // }
  // const word = (props) =>{
  //   return(
  //     <fieldset>
  //       <legend> the word is: </legend>
  //     </fieldset>
  //   )
  // }
  return (
    <BrowserRouter>
      <h1>React Routeing</h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:word">
          <Word/>
        </Route>
        <Route path="/search/:keyword/:textcolor">
          <Keyword />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
