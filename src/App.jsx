import "./App.scss";
import "./styles/partials/_globals.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import HomePage from "../src/pages/HomePage/HomePage.jsx";
import Prefectures from '../src/pages/Prefectures/Prefectures.jsx'
import ShrineMain from "./pages/ShrineMain/ShrineMain.jsx";
function App() {
  return (
    <BrowserRouter>
         <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shrines/:prefecture" element={<Prefectures />} />
        <Route path="/shrine/:shrineId" element={<ShrineMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
