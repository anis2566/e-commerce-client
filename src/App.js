import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import Layout from "./components/layout";
import Home from "./pages/home";
import Wishlist from "./pages/wishlist";
import Orders from "./pages/orders";
import Cart from "./pages/cart";
import Login from "./pages/login";
import Register from "./pages/register";
import Store from "./pages/store";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Profile from "./pages/profile";

function App() {
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://localhost:8080/api";
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="orders" element={<Orders />} />
            <Route path="cart" element={<Cart />} />
            <Route path="store" element={<Store />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
