import "./App.css";
import HelloWorld from "./HelloWorld";
import Title from "./Title";

function App(): JSX.Element {
  return (
    <div>
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <Title />
    </div>
  );
}

export default App;
