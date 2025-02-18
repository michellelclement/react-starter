import React, { useState } from "react";

// Import components
import TestComponent from "./TestComponent";
import Tweet from "./components/Tweet";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {
  const [name, setName] = useState("Michelle");

  const sayHelloHandler = (e) => {
    setName("Lennon");
  };

  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={sayHelloHandler}>Click</button>
      {/* <TestComponent /> */}
      {/* <CreateTweet /> */}
      {/* <TweetList name={name} message={message} /> */}
    </div>
  );
}

export default App;
