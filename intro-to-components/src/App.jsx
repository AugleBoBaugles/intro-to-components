import AboutMe from "./components/AboutMe.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import './App.css'

// Calls the AboutMe, Contact, and Projects components to diplay on page
function App() {
  return (
    <div id="bio">
      <AboutMe />
      <Contact />
      <Projects />
    </div>
  )
}

export default App
