import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./components/Pages/homepage";
import SingleProductPage from "./components/Pages/singleProduct";
import CartPage from "./components/Pages/cartPage";
import LoginPage from "./components/Pages/loginPage";
import RegisterPage from "./components/Pages/RegisterPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products/:id" element={<SingleProductPage />} />
              <Route path="/cart/:id?" element={<CartPage />} />
              <Route path="/login" element={< LoginPage />} />
              <Route path="/register" element={< RegisterPage />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
