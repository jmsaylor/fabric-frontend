import "./App.css";
import Value from "./components/Value";
import Transfer from "./components/Transfer";

function App() {
  return (
    <div className="App">
      <header className="App-header">HyperLedger Fabric Frontend Demo</header>
      <Value />
      <Transfer />
    </div>
  );
}

export default App;
