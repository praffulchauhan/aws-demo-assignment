import logo from "./logo.svg";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Components/Nav.js";
import Delete from "./Components/Delete/Delete";
import Get from "./Components/Fetch/Get";
import Update from "./Components/Update/Update";
import Insert from "./Components/Insert/Insert";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/insert" element={<Insert />} />
        <Route path="/fetch" element={<Get />} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
