import Intro from "./Components/intro/Intro"
import Navbar from "./Components/Navbar"
import Skills from "./Components/skills/Skills";
import Education from "./Components/education/Education";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/contact/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Education />
      <Contact /> 
      <Footer />
    </div>
  );
}

export default App;
