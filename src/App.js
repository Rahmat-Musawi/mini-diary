import Navbar from "./components/Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DiaryDetails from "./components/DiaryDetails";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/diaries/:id" element={<DiaryDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
