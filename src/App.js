import { Quote } from "./components";

function App() {
  return (
    <div className="App">
      <main className="main">
        <Quote />
        <div className="home-content">
          <div className="time-location">
            <h4 className="h4-header-style">GOOD EVENING</h4>
            <h1 className="h1-header-style">24:14</h1>
            <p className="timezone-text">BST</p>
            <h3 className="h3-header-style">in london, uk</h3>
          </div>
          <button className="btn-basic">
            more
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
