import "./App.css";
import "./resetCSS.css";
import { Balance } from "./Components/Balance/Balance";
import Chart from "./Components/Chart/Chart";

function App() {
  return (
    <>
      <main className="App">
        <Balance />
        <Chart />
      </main>
    </>
  );
}

export default App;
