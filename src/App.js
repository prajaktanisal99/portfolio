import React, { useState } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import './styles/global.css'; // Import global styles
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
  const [section, setSection] = useState('project');

  useState(() => {
    console.log('section updated to:', section);
  }, [section]);

  const renderSection = () => {
    switch (section) {
      case 'experience':
        return <Experience />;
      case 'project':
        return <Projects />;
      case 'education':
        return <Education />;
      default:
        return <Projects />;
    }
  };

  return (
    <div>
      {/* <Navbar /> */}
      <Hero setSection={setSection} />
      {renderSection()}
      <Footer />
    </div>
  );
}

export default App;
