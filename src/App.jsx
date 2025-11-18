import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Loginform from "./Components/Login";
import Navbar from "./Components/Navbar";
import Registrationform from "./Components/Registration";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <div className="pt-15">
          <Routes>

            <Route path="/" element={<Navigate to="/register" />} />

            <Route path="/register" element={<Registrationform />} />
            <Route path="/login" element={<Loginform />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
