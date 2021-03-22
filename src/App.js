import "./App.css";
import Value from "./components/Value";
import Transfer from "./components/Transfer";

function App() {
  return (
    <div>
      <header class="title">HyperLedger Fabric Frontend Demo</header>
      <Value />
      <Transfer />
    </div>
  );
}

export default App;
