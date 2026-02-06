import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./pages/Home";
import About from "./pages/About";
import ProtectedRoute from "./ProtectedRoute";
import "./App.css";

function App() {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("auth") === "true"
  );
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("auth", isAuth);
  }, [isAuth]);

  useEffect(() => {
    if (!isAuth && (location.pathname === "/about" || location.pathname === "/dashboard")) {
      alert("🔐 Please login first to access this page!");
    }
  }, [location, isAuth]);

  return (
    <>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />

      <Routes>
        <Route index element={<Home isAuth={isAuth} />} />
        
        <Route
          path="about"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <About />
            </ProtectedRoute>
          }
        />
        
        <Route path="login" element={<Login setIsAuth={setIsAuth} />} />

        <Route
          path="dashboard"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Dashboard setIsAuth={setIsAuth} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
