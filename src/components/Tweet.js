import React from "react";

const Tweet = ({ name, tweet, tweets, setTweets }) => {
  const deleteTweet = () => {
    // Get all tweets from the state, filter them and see if clicked does not match the tweet(message)
    setTweets(tweets.filter((t) => t !== tweet));
  };

  return (
    <div className="tweet">
      <h2>Name: {name}</h2>
      <h3>Tweet: {tweet}</h3>
      <button onClick={deleteTweet}>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
