import "./App.css";
import UA from "./pictures/UA.png";
import "bootstrap/dist/css/bootstrap.min.css";
//import Link from "react-bootstrap/Button";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="hero shadow-sm mb-5">
        <h5>👋 Hello, I am</h5>
        <h1>Olena Kutasevych</h1>
        <h3 className="mb-4">
          Front-end developer, based in Sweden
          <img src={UA} alt="Ukraine" className="ua m-2" />
        </h3>
        <button
          href="/contact.html"
          className="btn-branding"
          title="Contact Olena"
        >
          Contact me
        </button>
        <button href="/about.html" className="btn-branding" title="About Olena">
          About me
        </button>
      </div>
      <Main />
    </div>
  );
}

export default App;
