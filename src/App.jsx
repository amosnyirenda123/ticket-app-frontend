// import "./App.css";

import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/sign-in' element={<Login />}></Route>
        <Route path='/sign-up' element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
