import "./App.scss";
import "./styles/partials/_globals.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/HomePage/HomePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
