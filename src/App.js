import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Acceuil from "./components/Acceuil";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Acceuil" element={<Acceuil />}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
