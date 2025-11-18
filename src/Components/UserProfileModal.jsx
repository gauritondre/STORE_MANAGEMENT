import React from "react";

function UserProfileModal({ user, onClose }) {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg w-96 p-6 shadow-lg relative">

        <button
          className="absolute right-3 top-3 text-xl font-bold"
          onClick={onClose}
        >
          ✖
        </button>

        <h2 className="text-xl font-bold text-cyan-900 mb-4">User Profile</h2>

        <p><strong>Name :</strong> {user.name}</p>
        <p><strong>Email :</strong> {user.email}</p>
        <p><strong>Role :</strong> {user.role}</p>

      </div>
    </div>
  );
}

export default UserProfileModal;
