import { BrowserRouter, Route } from "react-router-dom";
import Head from "./components/Head";
import ProdSection from "./components/ProductSection";
import About from "./components/About";
import Contact from "./components/Contact";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Banner />
        <Head />
      </div>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/" component={ProdSection} exact />

      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
