import { useState } from 'react';
import './App.css';

function App() {
  const [buttonPress, setButtonPress] = useState("");
  const buttonClick = (num) => {
    setButtonPress(buttonPress + num);
  };
  const calculate = () => {
    setButtonPress(eval(buttonPress).toString());
  };
  const clear = () => {
    setButtonPress("");
  };
  const del = () => {
    setButtonPress(buttonPress?.slice(0, -1));
  };
  return (
    <>
      <div className="parent">
        <div className="child">
          <div>
            <input type="text" value={buttonPress}></input>
            <button
              onClick={() => {
                clear();
              }}
            >
              AC
            </button>
            <button
              onClick={() => {
                buttonClick("(");
              }}
            >
              (
            </button>
            <button
              onClick={() => {
                buttonClick(")");
              }}
            >
              )
            </button>
            <button
              onClick={() => {
                del();
              }}
            >
              del
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                buttonClick("7");
              }}
            >
              7
            </button>
            <button
              onClick={() => {
                buttonClick("8");
              }}
            >
              8
            </button>
            <button
              onClick={() => {
                buttonClick("9");
              }}
            >
              9
            </button>
            <button
              className="operator"
              onClick={() => {
                buttonClick("/");
              }}
            >
              /
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                buttonClick("4");
              }}
            >
              4
            </button>
            <button
              onClick={() => {
                buttonClick("5");
              }}
            >
              5
            </button>
            <button
              onClick={() => {
                buttonClick("6");
              }}
            >
              6
            </button>
            <button
              className="operator"
              onClick={() => {
                buttonClick("*");
              }}
            >
              *
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                buttonClick("1");
              }}
            >
              1
            </button>
            <button
              onClick={() => {
                buttonClick("2");
              }}
            >
              2
            </button>
            <button
              onClick={() => {
                buttonClick("3");
              }}
            >
              3
            </button>
            <button
              className="operator"
              onClick={() => {
                buttonClick("+");
              }}
            >
              +
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                buttonClick(".");
              }}
            >
              .
            </button>
            <button
              onClick={() => {
                buttonClick("0");
              }}
            >
              0
            </button>
            <button
              className="calculation"
              onClick={() => {
                calculate();
              }}
            >
              =
            </button>
            <button
              className="operator"
              onClick={() => {
                buttonClick("-");
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
