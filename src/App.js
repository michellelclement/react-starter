// Import components
import TestComponent from "./TestComponent";
import Tweet from "./components/Tweet";
import CreateTweet from "./components/CreateTweet";

function App() {
  const name = "Michelle";
  const message = "This is the tweet";

  return (
    <div>
      <h1>Hello React</h1>
      {/* <TestComponent /> */}
      <CreateTweet />
      <Tweet name={name} message={message} />
    </div>
  );
}

export default App;
