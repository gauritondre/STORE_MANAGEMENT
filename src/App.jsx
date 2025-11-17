import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Loginform from './Components/Login'
import Navbar from './Components/Navbar'
import Registrationform from './Components/Registration'
import Storeform from "./Components/StoreForm";

function App() {

  return (
    <>
      {/* <BrowserRouter>
      <Navbar />

      <div className="pt-15"> 
      <Routes>
        <Route path="/register" element={<Registrationform />} />
        <Route path="/login" element={<Loginform />} />
      </Routes>
      </div>
    </BrowserRouter> */}

    <Storeform/>
    </>
  )
}

export default App
