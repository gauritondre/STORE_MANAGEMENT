import React, { useState, useEffect, useRef } from "react";
import UserProfileModal from "./UserProfileModal";
import axios from "axios";
import UpdatePasswordModal from "./UpdatePasswordModal";
import { Link } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const menuRef = useRef(null);   

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      Promise.resolve().then(() => setUser(JSON.parse(savedUser)));
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  //  UPDATE PASSWORD API
  const updatePassword = async (newPass) => {
    try {
      await axios.post("http://localhost:4002/update-password", {
        email: user.email,
        password: newPass,
      });

      alert("Password Updated Successfully!");
    } catch (err) {
      alert(" Error updating password");
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <>
      <nav className="bg-cyan-900 p-3 text-white flex justify-end fixed top-0 w-full z-50">
        <div className="relative flex gap-3 mr-12">

          {!user && (
            <>
              <Link to="/register">
                <button className="m-3 w-25 bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-1.5  rounded-lg">
                  Register
                </button>
              </Link>

              <Link to="/login">
                <button className="m-3 w-25 bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-1.5 rounded-lg">
                  Login
                </button>
              </Link>
            </>
          )}

          {user && (
            <div className="relative" ref={menuRef}>  
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-full"
              >
                👤
              </button>

              {menuOpen && (
                <div className="absolute right-5 mt-2 bg-gray-50 text-gray-800 rounded-md shadow-md w-40  p-2">
                  <p
                    onClick={() => {
                      setMenuOpen(false);
                      setShowProfileModal(true);
                    }}
                    className="hover:bg-gray-200 p-2 cursor-pointer"
                  >
                    User Profile
                  </p>

                  <p
                    onClick={() => {
                      setMenuOpen(false);
                      setShowPasswordModal(true);
                    }}
                    className="hover:bg-gray-200 p-2 cursor-pointer"
                  >
                    Update Password
                  </p>

                  <p
                    onClick={handleLogout}
                    className="hover:bg-gray-200 p-2 cursor-pointer text-red-700"
                  >
                    Sign Out
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      {showProfileModal && (
        <UserProfileModal
          user={user}
          onClose={() => setShowProfileModal(false)}
        />
      )}

      {showPasswordModal && (
        <UpdatePasswordModal
          onClose={() => setShowPasswordModal(false)}
          onUpdate={(newPass) => {
            updatePassword(newPass);
            setShowPasswordModal(false);
          }}
        />
      )}
    </>
  );
}

export default Navbar;
