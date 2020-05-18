import React, { Component } from "react";
import DisplayBoard from "./DisplayBoard";
import Nav from "./Nav";
import BetContextProvider from "./BetContext";
import ChangeTheme from "./ChangeTheme";

class App extends Component {
  render() {
    return (
      <div>
        <BetContextProvider>
          <Nav />
          <ChangeTheme />
          <DisplayBoard />
        </BetContextProvider>
      </div>
    );
  }
}

export default App;
