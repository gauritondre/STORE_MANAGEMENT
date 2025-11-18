import { useState } from "react";

function UpdatePasswordModal({ onClose, onUpdate }) {
  const [password, setPassword] = useState("");

  return (
    <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-80 relative">

        <button className="absolute right-3 top-3" onClick={onClose}>✖</button>

        <h2 className="text-lg font-bold mb-4 text-cyan-800">Update Password</h2>

        <input
          type="password"
          placeholder="Enter new password"
          className="border p-2 w-full rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-cyan-700 text-white py-2 rounded mt-4"
          onClick={() => onUpdate(password)}
        >
          Update
        </button>

      </div>
    </div>
  );
}
export default UpdatePasswordModal;
