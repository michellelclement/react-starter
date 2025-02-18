import React from "react";
import "../styles/Tweet.scss";

const Tweet = ({ name, tweet, tweets, setTweets }) => {
  const deleteTweet = () => {
    // Get all tweets from the state, filter them and see if clicked does not match the tweet(message)
    setTweets(tweets.filter((state) => state.id !== tweet.id));
  };

  return (
    <div className="tweet">
      <h2>Name: {name}</h2>
      <h3>Tweet: {tweet.message}</h3>
      <button onClick={deleteTweet}>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
