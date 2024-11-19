import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./Pages/Page"
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import SelectRoom from "./Pages/SelectRoom";
import CheckInForm from "./Components/CheckInForm";
import BookRoom from "./Pages/BookRoom";
import PaymentRoom from "./Pages/PaymentRoom";

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/selectroom" element={<SelectRoom />} />
        <Route path="/bookroom/:roomId" element={<BookRoom />} />
        <Route path="/paymentroom" element={<PaymentRoom />} />
        <Route path="/checkin" element={<CheckInForm />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
