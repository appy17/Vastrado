import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import React from "react";
import Home from "./Pages/Home";
import "./App.css";
import { Toaster } from "sonner";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import CollectioPages from "./Pages/CollectioPages";
import ProductDetails from "./components/Products/ProductDetails";
import ChecKOut from "./components/Cart/CheckOut";

function App() {
  return (
    <BrowserRouter >
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="collection/:collection" element={<CollectioPages />} />
          <Route path="product/:id" element={<ProductDetails />}/>
          <Route  path="checkout" element={<ChecKOut />}/>


         

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
