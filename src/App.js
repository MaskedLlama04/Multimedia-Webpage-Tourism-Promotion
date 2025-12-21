import "./App.css";

// Main components
import Header from "./components/header/Header";
import HeroSlider from "./components/heroslider/HeroSlider";
import Activities from "./components/activities/Activities";
import Adventure from "./components/adventure/Adventure";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSlider />
      <Activities />
      <Adventure />
      <Footer />
    </div>
  );
}

export default App;
