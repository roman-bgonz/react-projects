import "./App.css";
import FirstComponent, {
  SecondComponent,
} from "./components/learning-examples/FirsComponent";
import ThirdComponent from "./components/learning-examples/ThirdComponent";
import Counter from "./components/counter/Counter";

function App() {
  return (
    <div className="App">
      {/* <LearningComponents></LearningComponents> */}
      <Counter></Counter>
    </div>
  );
}

function LearningComponents() {
  return (
    <div className="LearningComponents">
      Holi
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
    </div>
  );
}
export default App;
