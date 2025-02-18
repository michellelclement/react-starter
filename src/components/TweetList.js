import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ name, tweets, setName }) => {
  return (
    <div className="tweet-list">
      <Tweet name={name} />
      <button onClick={() => setName("JOHN")}>Click</button>
    </div>
  );
};

export default TweetList;
