import "./App.css";
import UA from "./pictures/UA.png";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="hero">
        <h5>👋 Hello, I am</h5>
        <h1>Olena Kutasevych</h1>
        <h3>
          Front-end developer, based in Sweden
          <img src={UA} alt="Ukraine" className="ua m-2" />
        </h3>
      </div>
    </div>
  );
}

export default App;
