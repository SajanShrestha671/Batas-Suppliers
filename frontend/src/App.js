import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./components/Pages/homepage";
import SingleProductPage from "./components/Pages/singleProduct";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<SingleProductPage />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
