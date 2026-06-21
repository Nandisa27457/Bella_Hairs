
import HomePage 
from "./Pages/HomePage";
import ServicesPage from "./Pages/Services";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AboutPage from "./Pages/About";
import BookingPage from "./Pages/Booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );  
}

export default App;

