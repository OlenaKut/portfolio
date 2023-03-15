import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import WorkPage from "./pages/WorkPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/work" element={<WorkPage />} />
      </Routes>
    </div>
  );
}

export default App;
