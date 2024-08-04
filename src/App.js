import "./App.css";
import "./asset/scss/app.scss";
import Header from "./components/header/Header";
import Offers from "./components/offers/Offers";
import AboutUs from "./components/aboutUs/AboutUs";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Offers />
                <AboutUs />
              </div>
            }
          />
          <Route
            path="/products"
            element={<div className="component--style">Products Component</div>}
          />
          <Route
            path="/cart"
            element={<div className="component--style">Cart Component</div>}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
