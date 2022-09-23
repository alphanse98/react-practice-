import "./App.css";
import Loginpage from "./router/Loginpage";
import Home from "./router/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./router/Card";
import contaxtVariable from "./router/context";
import { ReducerVariable,statef } from "./router/Reducer";
import { useReducer } from "react";

function App() {
  let [appState, setappState] = useReducer(ReducerVariable, statef);
  return (
    <div>
      <contaxtVariable.Provider value={{ appState, setappState }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Loginpage />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="card" element={<Card />}></Route>
          </Routes>
        </BrowserRouter>
      </contaxtVariable.Provider>
    </div>
  );
}

export default App;
