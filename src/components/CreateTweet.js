import React, { useState } from "react";

const CreateTweet = ({ tweets, setTweets, textInput, setTextInput }) => {
  //functions
  const userInputHander = (e) => {
    setTextInput(e.target.value);
  };

  const submitTweetHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, textInput]);
    setTextInput("");
  };

  return (
    <form onSubmit={submitTweetHandler}>
      <textarea
        value={textInput}
        onChange={userInputHander}
        cols="40"
        rows="10"
        name=""
        id=""
      ></textarea>
      <button>Submit</button>
      <h1>{textInput}</h1>
    </form>
  );
};

export default CreateTweet;
