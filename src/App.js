import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projekte from "./components/Projekte";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Projekte />
      <Contact />
    </div>
  );
}

export default App;
