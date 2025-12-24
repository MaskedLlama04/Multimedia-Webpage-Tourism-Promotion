import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Components
import Header from "./components/header/Header";
import HeroSlider from "./components/heroslider/HeroSlider";
import Intro from "./components/intro/Intro";
import Presentation from "./components/presentation/Presentation";
import Activities from "./components/activities/Activities";
import Adventure from "./components/adventure/Adventure";
import Footer from "./components/footer/Footer";
import PracticalInfo from "./components/practical-info/PracticalInfo";
import Sleep from "./components/sleep/Sleep";

// Pages
import Eat from "./components/eating/Eat";
import Beaches from "./components/beaches/Beaches";
import Calendar from "./components/calendar/Calendar";
import AdventureSelector from "./components/adventure/AdventureSelector";

function App() {
  // State to control the Practical Info panel
  const [showPractical, setShowPractical] = useState(false);

  return (
    <BrowserRouter>
      {/* Pass toggle function to Header */}
      <Header onPracticalClick={() => setShowPractical(true)} />

      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <HeroSlider />
              <Intro />
              <Presentation />
              <Activities />
              <Adventure />
            </>
          }
        />

        {/* Where to eat page */}
        <Route path="/eat" element={<Eat />} />
        {/* Coves & Beaches page */}
        <Route path="/beaches" element={<Beaches />} />
        {/* Hotels & Where to sleep page*/}
        <Route path="/sleep" element={<Sleep />} />
        {/* See the Calendar of the events of the month page*/}
        <Route path="/calendar" element={<Calendar />} />
        {/* Adventure selector page */}
        <Route path="/adventure-selector" element={<AdventureSelector />} />
      </Routes>

      {/* Practical Info floating panel */}
      <PracticalInfo
        isOpen={showPractical}
        onClose={() => setShowPractical(false)}
      />

      <Footer />
    </BrowserRouter>
  );
}

export default App;