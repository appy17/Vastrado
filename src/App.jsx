import { Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import React from "react";
import Home from "./Pages/Home";
import './App.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
