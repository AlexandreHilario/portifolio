
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home/index";
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';


function App() {


  return (
    <div className="App">
      <>
        <Header />
      </>
      <>
        <Home />
      </>
      <>
        <Resume />
      </>
      <>
        <Contact />
      </>
      <>
        <Footer />
      </>
    </div>
  );
}

export default App;
