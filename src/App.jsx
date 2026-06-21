
import HomePage 
from "./Pages/HomePage";
import ServicesPage from "./Pages/Services";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AboutPage from "./Pages/About";
import BookingPage from "./Pages/Booking";
import Gallery from "./Pages/Gallery";
import ContactPage from "./Pages/Contact";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );  
}

export default App;

