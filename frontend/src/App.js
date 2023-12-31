import React from "react";
import { Container } from 'react-bootstrap';
import Header from "./components/header";
import Footer from "./components/footer"
function App() {
  return (
    <>
    <Header />
    <Container>
    <main className="py-3">
      <h1>Hello Sajan...!!!</h1>
    </main>
    </Container>
    <Footer />
    </>
  );
}

export default App;
