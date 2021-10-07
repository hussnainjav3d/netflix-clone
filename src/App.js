import Row from "./Row";
import "./App.css";
import requests from "./request.js";

function App() {
  return (
    <div className="App">
      <h1>NetFlix</h1>
      <Row
        title="NETFLIX ORIGiNALS"
        fetchURL="https://api.themoviedb.org/3/discover/tv?api_key=90f8f366200af5d84b15e3c0d22ab1cb&with_networks=213"
      />
      <Row title="Trending" />
    </div>
  );
}

export default App;
