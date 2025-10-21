import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { Engagements, Favorites, PhotoView, Venues } from "./components";
import { About, Contact, Home } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/photo/:id" element={<PhotoView />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/engagements" element={<Engagements />} />
            <Route path="/venues" element={<Venues />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
