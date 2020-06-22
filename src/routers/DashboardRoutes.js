import React from "react";
import { Navbar } from "../components/ui/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";

import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { createHistory } from "history";

export const DashboardRoutes = ({ history }) => {
  // console.log('History', history.listen('/dc'))
  console.log("Hisory", window.history);

function handleBackForwardButton() {

    // If none, then zero
    const historyLength = Number(sessionStorage.getItem("historyLength"));
    // let { state } = await window.history.state; // Absolute position in stack
    let state = window.history.state;// Absolute position in stack
    let specificState = state.state
    // console.log('specificState', specificState)
    // console.log('STATEEEE', state)
    // console.log('window.history.state', window.history.state);
    // console.log('window.history.length', window.history.length);
    let position;
    debugger;
    // if ((!state && !specificState) || (!specificState && !state.state && historyLength && !state && !position)) {
    if ((!state.state && !specificState & historyLength === 0) || ((!state || !state.state) && !specificState & window.history.length > (!state || state.state)) || (!state.state && !specificState & window.history.length > historyLength) ) {
      // Meaning a new entry on the stack
      position = historyLength + 1; // Top of stack
      debugger;
      //  Stamp the entry with its own position in the stack
      window.history.replaceState(window.history.length, /*no title*/ "");
      // (2) Keep track of the last position shown
      sessionStorage.setItem("historyLength", String(window.history.length));
      debugger;
      // (3) Discover the direction of travel by comparing the two
      const direction = Math.sign(position - historyLength);
      console.log("Travel direction forward should be (1) :" + direction);
      debugger;
      // forward should be (1)
    } 
    else if ((specificState === null || specificState === undefined && !position) && historyLength > state) {
      position = historyLength - 1; // Top of stack
      const direction = Math.sign((position - historyLength));
      console.log("Travel direction is backward shoudl be (-1) :" + direction);
      sessionStorage.setItem("historyLength", String(window.history.length -1));
      debugger;
      //One of backward (-1)
    } 
    else if (state && !specificState && historyLength === state) {
      const direction = Math.sign(state - historyLength);
      console.log("Reloading page shoudl be (0) : " + direction);
    //   sessionStorage.setItem("historyLength", String(historyLength));
      debugger;
      //Reloading page shoudl be (0)
    }
  }

  window.addEventListener("pageshow", handleBackForwardButton);
  window.addEventListener("popstate", handleBackForwardButton); 

  return (
    <>
      <Navbar />
      {/* {handleAndr()} */}
      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/hero/:heroeId" component={HeroScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/search" component={SearchScreen} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
