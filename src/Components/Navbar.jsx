import React from "react";
import { Link } from "react-router-dom";


function Navbar(){

    return (
        <nav className="bg-gray-700 p-2 text-white flex justify-end fixed top-0 w-full z-50 ">

            <div className="relative flex  gap-3 mr-12 ">
                
                <Link to="/register">
                <button className="w-22 m-3 bg-white text-blue-600 hover:bg-gray-300 font-semibold hover:cursor-pointer py-1.5 rounded-lg ">
                    Register
                </button>
                </Link>

                <Link to="/login">
                <button 
                className="w-20 m-3 bg-white text-blue-600 hover:bg-gray-300 font-semibold py-1.5 hover:cursor-pointer rounded-lg transition">
                    Login
                </button>
                </Link>
            
            </div>
            
        </nav>
  );

}

export default Navbar;