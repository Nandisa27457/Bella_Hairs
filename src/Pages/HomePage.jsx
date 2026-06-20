import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <h1>Welcome to Bella Hair Salon</h1>
        <p>Your one-stop destination for all your hair care needs.</p>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;