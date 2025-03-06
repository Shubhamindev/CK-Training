import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './pages/navbar/nav';
import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Login from './pages/Auth/login/login';
import SignUp from './pages/Auth/signup/signup';
import NotFound from "./pages/NotFound";
import Profile from "./pages/profile/profile";
import ProtectedRoute from "./pages/Auth/protectedRoute";
import Settings from './pages/settings/settings';
import Assignment from './pages/Assignment/react';
import Products from './pages/Products/products';
import ProductDetails from './pages/Products/productdetails';
import Cart from './pages/cart/cart';
import { ThemeProvider, useTheme } from './pages/context/ThemeContext';


function AppContent() {
  const { theme } = useTheme(); 

  return (
    <div className={`${theme === "dark" ? "dark bg-gray-900 text-white" : "bg-white text-black"} min-h-screen`}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Products" element={<ProtectedRoute><Products/></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/assignment" element={<Assignment />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />1000
      </Routes>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
