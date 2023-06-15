import React, { useState } from "react";
import "./App.css";

function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");
  const [currentValue, setCurrentValue] = useState("");
  const [operator, setOperator] = useState("");
  const [previousValue, setPreviousValue] = useState("");

  const handleNumberClick = (number) => {
    if (operator !== "") {
      setCurrentValue(prevValue => prevValue + number);
      setDisplayValue(prevValue => prevValue + number);
      setOperator("");
    } else {
      if (displayValue === "0") {
        setDisplayValue(number);
        setCurrentValue(number);
      } else {
        const newValue = displayValue + number;
        setDisplayValue(newValue);
        setCurrentValue(newValue);
      }
    }
  };
  
  

  const handleOperatorClick = (op) => {
    setOperator(op);
    setPreviousValue(displayValue);
    setCurrentValue("");
    calculate();
  };
  

  const calculate = () => {
    let result;
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);

    if (isNaN(prev) || isNaN(current)) {
      return;
    }

    switch (operator) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;
      default:
        return;
    }

    const formattedResult = formatResult(result);
    setDisplayValue(formattedResult);
    setPreviousValue(formattedResult);
    setCurrentValue("");
  };

  const handleEqualsClick = () => {
    calculate();
    setOperator("");
  };
  

  const handleClearClick = () => {
    setDisplayValue("0");
    setCurrentValue("");
    setOperator("");
    setPreviousValue("");
  };

  const formatResult = (result) => {
    const precision = 4;
    const rounded = Number(result.toFixed(precision));
    return String(rounded);
  };

  return (
    <div className="calculator">
      <div id="display">{displayValue}</div>
      <div className="keypad">
        <button id="zero" onClick={() => handleNumberClick("0")}>
          0
        </button>
        <button id="one" onClick={() => handleNumberClick("1")}>
          1
        </button>
        <button id="two" onClick={() => handleNumberClick("2")}>
          2
        </button>
        <button id="three" onClick={() => handleNumberClick("3")}>
          3
        </button>
        <button id="four" onClick={() => handleNumberClick("4")}>
          4
        </button>
        <button id="five" onClick={() => handleNumberClick("5")}>
          5
        </button>
        <button id="six" onClick={() => handleNumberClick("6")}>
          6
        </button>
        <button id="seven" onClick={() => handleNumberClick("7")}>
          7
        </button>
        <button id="eight" onClick={() => handleNumberClick("8")}>
          8
        </button>
        <button id="nine" onClick={() => handleNumberClick("9")}>
          9
        </button>
        <button id="add" onClick={() => handleOperatorClick("+")}>
          +
        </button>
        <button id="rest" onClick={() => handleOperatorClick("-")}>
          -
        </button>
        <button id="multiply" onClick={() => handleOperatorClick("*")}>
          *
        </button>
        <button id="divide" onClick={() => handleOperatorClick("/")}>
          /
        </button>
        <button id="result" onClick={() => handleEqualsClick("=")}>
          =
        </button>
        <button id="clear" onClick={() => handleClearClick()}>
          CLEAR
        </button>
      </div>
    </div>
  );
}

export default Calculator;
