import React from "react";
import DadJoke from "./DadJoke";
import Joke from "./Joke";

class App extends React.Component {
  render() {
  return (
    <div>
      <DadJoke />
      <Joke />
    </div>

  );
  }
}

export default App;