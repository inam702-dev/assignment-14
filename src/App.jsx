
import "./index.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className=" bg-slate-800 flex flex-col scroll-smooth">
        <Header />
        <Home />
        <About />
        <Services />
        <Contact />

        <Footer />
      </div>
    </>
  );
}

export default App;
