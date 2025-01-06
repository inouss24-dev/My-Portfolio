import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Skill from "./components/Skill"
import Project from "./components/Project"
import Footer from "./components/Footer"



function App() {

  return (
    <>
      <div>
        <div className="p-5 md:px-[15%]">
          <Navbar />
          <Home />
        </div>
        <About />
        <div className="p-5 md:px-[15%]">
          <Skill />
        </div>
        <div className="p-5 md:px-[15%]">
          <Project />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
