import { useReducer } from "react";
import DigitButton from "./DigitButton.js";
import OperationDigit from "./OperationDigit.js";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state;
      }
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""} ${payload.digit}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }
      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };

    case ACTIONS.CLEAR:
      return {};

    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        };
      }
      if (state.currentOperand == null) return state;
      if (state.currentOperand.length === 1)
        return {
          ...state,
          currentOperand: null,
        };
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }
      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };
  }
}

function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "÷":
      computation = prev / current;
      break;
  }

  return computation.toString();
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

function formatOperand(operand) {
  if (operand == null) return;
  const [integer, decimal] = operand.split(".");
  if (decimal == null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  // dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 1 } })

  return (
    <main>
      <div className="container">
        <div className="text-center">
          <p id="title">CALCULATOR</p>
        </div>
        <div className="text-center output">
          <div className="prvious-operand">
            {formatOperand(previousOperand)} {operation}
          </div>
          <div className="current-operand">{formatOperand(currentOperand)}</div>
        </div>
        <div id="buttons">
          <ul>
            <li>
              <button
                className="btn btn-default text-center two-btn"
                onClick={() => dispatch({ type: ACTIONS.CLEAR })}
              >
                AC
              </button>
              <button
                className="btn btn-default text-center"
                onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
              >
                DEL
              </button>
              <OperationDigit
                className="btn btn-default text-center"
                operation="÷"
                dispatch={dispatch}
              />
            </li>
            <li>
              <DigitButton
                className="btn btn-default text-center"
                digit="1"
                dispatch={dispatch}
              />
              <DigitButton
                className="btn btn-default text-center"
                digit="2"
                dispatch={dispatch}
              />
              <DigitButton
                className="btn btn-default text-center"
                digit="3"
                dispatch={dispatch}
              />
              <OperationDigit
                className="btn btn-default text-center"
                operation="*"
                dispatch={dispatch}
              />
            </li>
            <li>
              <DigitButton
                className="btn btn-default text-center"
                digit="4"
                dispatch={dispatch}
              />

              <DigitButton
                className="btn btn-default text-center"
                digit="5"
                dispatch={dispatch}
              />

              <DigitButton
                className="btn btn-default text-center"
                digit="6"
                dispatch={dispatch}
              />
              <OperationDigit
                className="btn btn-default text-center"
                operation="-"
                dispatch={dispatch}
              />
            </li>
            <li>
              <DigitButton
                className="btn btn-default text-center"
                digit="7"
                dispatch={dispatch}
              />

              <DigitButton
                className="btn btn-default text-center"
                digit="8"
                dispatch={dispatch}
              />
              <DigitButton
                className="btn btn-default text-center"
                digit="9"
                dispatch={dispatch}
              />
              <OperationDigit
                className="btn btn-default text-center"
                operation="+"
                 dispatch={dispatch}
              />
            </li>
            <li>
              <DigitButton
                className="btn btn-default text-center"
                digit="."
                dispatch={dispatch}
              />
              <DigitButton
                className="btn btn-default text-center"
                digit="0"
                dispatch={dispatch}
              />
              <button
                className="btn btn-default text-center two-btn equal-btn"
                onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
              >
                =
              </button>
            </li>
          </ul>
        </div>

        <p className="copy-text">
          {" "}
          Made by &nbsp;
          <a href="https://github.com/pavansuresh/CalculatorApp">
            PavanKumar
          </a>{" "}
        </p>
      </div>
    </main>
  );
}

export default App;
