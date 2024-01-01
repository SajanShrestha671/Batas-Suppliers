import React from "react";
import { Container } from 'react-bootstrap';
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./components/Pages/homepage";

function App() {
  return (
    <>
    <Header />
    
    <main className="py-3">
      <Container>
        <HomePage />
      </Container>
    </main>
    
    <Footer />
    </>
  );
}

export default App;
