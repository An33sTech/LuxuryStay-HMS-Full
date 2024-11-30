import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./Pages/Page"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SelectRoom from "./Booking/SelectRoom";
import CheckInForm from "./Booking/CheckInForm";
import BookRoom from "./Booking/BookRoom";
import InvoiceRoom from "./Booking/InvoiceRoom";
import Gallery from "./Pages/Gallery";
import Blog from "./Pages/Blog";
import Services from "./Pages/Services";
import ContactForm from "./Pages/ContactForm";

function App() {

  return (
    <>
    <Router>
      <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/selectroom" element={<SelectRoom />} />
        <Route path="/bookroom/:roomId" element={<BookRoom />} />
        <Route path="/invoiceroom/:reservationId" element={<InvoiceRoom />} />
        <Route path="/checkin" element={<CheckInForm />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<ContactForm/>} />
      </Routes>
      <Footer />
      </div>
    </Router>
    </>
  )
}

export default App
