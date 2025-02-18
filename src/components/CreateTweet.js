import React, { useState } from "react";

const CreateTweet = () => {
  //State
  const [textInput, setTextInput] = useState("");

  //functions
  const userInputHander = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <form>
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
