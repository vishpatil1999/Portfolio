import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LenisScroll from "./components/LenisScroll";
import Navbar from "./components/Navbar";
import Services from "./components/Achievements";
import Work from "./components/Work";

function App() {
  return (
    <>
      <LenisScroll />
      <Navbar />
      <Header />
      <About />
      {/* <Services /> */}
      <Work />
      <Contact />
      <Footer />
    </>

  )
}

export default App;
