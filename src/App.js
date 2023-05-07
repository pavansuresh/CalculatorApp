function App() {
  return (
    <main>
      <div className="container">
        <div className="text-center">
          <p id="title">CALCULATOR</p>
        </div>
        <div className="text-center output">
          <div className="prvious-operand">5 + 6</div>
          <div className="current-operand">6</div>
        </div>
        <div id="buttons">
          <ul>
            <li>
              <button className="btn btn-default text-center two-btn" value="C">
                AC
              </button>
              <button className="btn btn-default text-center" value="%">
                DEL
              </button>
              <button className="btn btn-default text-center" value="/">
                /
              </button>
            </li>
            <li>
              <button className="btn btn-default text-center" value={1}>
                1
              </button>
              <button className="btn btn-default text-center" value={2}>
                2
              </button>
              <button className="btn btn-default text-center" value={3}>
                3
              </button>
              <button className="btn btn-default text-center" value="*">
                *
              </button>
            </li>
            <li>
              <button className="btn btn-default text-center" value={4}>
                4
              </button>
              <button className="btn btn-default text-center" value={5}>
                5
              </button>
              <button className="btn btn-default text-center" value={6}>
                6
              </button>
              <button className="btn btn-default text-center" value="-">
                -
              </button>
            </li>
            <li>
              <button className="btn btn-default text-center" value={7}>
                7
              </button>
              <button className="btn btn-default text-center" value={8}>
                8
              </button>
              <button className="btn btn-default text-center" value={9}>
                9
              </button>
              <button className="btn btn-default text-center" value="+">
                +
              </button>
            </li>
            <li>
              <button className="btn btn-default text-center" value=".">
                .
              </button>
              <button className="btn btn-default text-center" value={0}>
                0
              </button>
              <button
                className="btn btn-default text-center two-btn equal-btn"
                value="="
              >
                =
              </button>
            </li>
          </ul>
        </div>

        {/* <p> Made by
          <a href="https://github.com/pavansuresh/CalculatorApp">Pavan</a>{" "}
        </p> */}
      </div>
    </main>
  );
}

export default App;
