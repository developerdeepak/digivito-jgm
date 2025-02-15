import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Pages from "./pages";
import Components from "./components";

function App() {
  return (
    <div className="container-fluid poppins App">
      <BrowserRouter>
        <Components.PageScrollToTop />
        <Routes>
          <Route path="/" element={<Pages.Layout />}>
            <Route index element={<Pages.Home />} />
            <Route path="/services" element={<Pages.Services />} />
            <Route path="/contact" element={<Pages.Contact />} />
            <Route path="/about" element={<Pages.About />} />
            <Route path="/terms" element={<Pages.Terms />} />
            <Route path="/privacy" element={<Pages.Privacy />} />
            <Route path="*" element={<Pages.ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
