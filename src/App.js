import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Pages from "./pages";

function App() {
  return (
    <div className="container-fluid poppins App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pages.Layout />}>
            <Route index element={<Pages.Home />} />
            <Route path="/contact" element={<Pages.Contact />} />
            <Route path="/about" element={<Pages.About />} />
            <Route path="*" element={<Pages.ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
