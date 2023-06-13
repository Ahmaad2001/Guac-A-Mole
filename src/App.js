import "./App.css";
import { AvocadoButton } from "./components/AvocadoButton/AvocadoButton";
import { useState } from "react";
import { useCountdown } from "./timer";
// 3 states
// 0 => empty
// 1 => filled
// 2 => opened
//
const getRandomArray = () => {
  let arr = Array(5)
    .fill(0)
    .map((item) => (item = Math.round(Math.random())));
  // avoid empty array
  if (arr.reduce((a, b) => a + b) == 0) arr[0] = 1;

  return arr;
};

function App() {
  let [isStart, setIsStart] = useState(false);
  let [arrayOfAvocads, setArrayOfAvocads] = useState(getRandomArray);
  let [score, setScore] = useState(0);
  let [seconds, resetter] = useCountdown(onCounterReset);

  // state score
  // google timer

  //1- reset every 10 sec
  //2- every press ++1
  function updateArrayOfAvocad(id) {
    console.log(id);
    arrayOfAvocads[id] = 2;
    setScore(score + 1);
    setArrayOfAvocads([...arrayOfAvocads]);
    if (arrayOfAvocads.indexOf(1) == -1) {
      resetPuzzle();
    }
  }
  function onCounterReset() {
    resetPuzzle();
  }
  function resetCounter() {
    resetter();
  }
  function resetPuzzle() {
    setArrayOfAvocads(getRandomArray());
    resetCounter();
  }

  // <AvocadGame/>
  return (
    <>
      <h1 className="App">Guac-A-Mole </h1>
      <h2 className="App">Your Score is {score}</h2>

      {!isStart && <button onClick={() => setIsStart(true)}>START</button>}

      {isStart && (
        <div className="container">
          {arrayOfAvocads.map((item, i) => (
            <AvocadoButton
              key={i}
              id={i}
              state={item}
              onClickCallback={(buttonClackbackID) =>
                updateArrayOfAvocad(buttonClackbackID)
              }
            />
          ))}
          <div>
            {seconds}
            <button onClick={() => resetPuzzle()}>RESET</button>
            <button onClick={() => resetCounter()}>RESET Counter</button>
          </div>
        </div>
      )}

      {!isStart && (
        <h2 className="App" onClick={() => setIsStart(true)}>
          Press here to start{" "}
        </h2>
      )}
    </>
  );
}

export default App;
