import React, { useState } from "react";

// Import components
import TestComponent from "./TestComponent";
import Tweet from "./components/Tweet";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {
  const [name, setName] = useState("Michelle");
  const message = "Hello this is a tweet";

  return (
    <div>
      <CreateTweet />
      <TweetList setName={setName} name={name} message={message} />
    </div>
  );
}

export default App;
