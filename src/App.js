import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import ImageSlider from "./Components/ImageSilder";
import Navbar from "./Components/Navbar";
import Offers from "./Components/Offers";
import Plan from "./Components/Plan";
import Rooms from "./Components/Rooms";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Rooms />
      <ImageSlider />
      <Footer />
    </div>
  );
}

export default App;
