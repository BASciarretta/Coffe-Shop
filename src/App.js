import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ItemList from "./containers/ItemList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemList/>
    </div>
  );
}

export default App;
