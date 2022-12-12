import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getUsers } from "./redux/UserSlice";
import { getTodos } from "./redux/TodoSlice";
import { BrowserRouter as Router } from "react-router-dom";
import Accueil from "./components/Accueil";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getTodos());
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
        <Accueil />
      </div>
    </Router>
  );
}

export default App;
