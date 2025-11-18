import {useState} from "react";
import axios from "axios";


function Loginform(){

    const [role, setRole] = useState("user");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const getPasswordError = () => {
    if (password.length === 0) return "";

    if (password.length < 8) return "Password must be at least 8 characters";
    if (password.length > 16) return "Password cannot exceed 16 characters";

    if (!/[A-Z]/.test(password))
      return "Password must contain at least one uppercase letter";

    if (!/[!@#$%^&*]/.test(password))
      return "Password must contain at least one special character";

    return ""; 
  };

  const handleLogin = async () => {
  try {
    console.log("Sending:", email, password, role);

    const response = await axios.get(
         "http://localhost:4002/login",
      {
        params: { email, password, role }
      }
    );

    console.log("Response:", response.data);

    localStorage.setItem(
    "user",
    JSON.stringify({
        name: response.data.user.name,
        email: response.data.user.email,
        role: response.data.user.role
    })
    );

    alert("Login Successful");

    window.location.href = "/";
  } 
  catch (error) {
    console.error("Login failed:", error);
    alert("Login Failed!");
  }
};

    return(
        <div className="flex flex-col items-center justify-center p-6 mt-16">
             <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-lg">
                 <h1 className="text-2xl text-center font-bold mb-6 mt-4 text-cyan-800">
                    {role === "user" && <span> User Login  </span>}
                    {role === "administrator" && <span> Administrator Login </span>}
                    {role === "storeOwner" && <span> Store-Owner Login </span>}

                </h1>
                
            <div className="text-center mb-4 text-gray-700 font-medium">
                <label className="p-2 ">
                    <input
                    type="radio"
                    value="user"
                    name="role"
                    checked={role === "user"}
                    onChange={(e) => setRole(e.target.value)}
                    />
                    User
                </label>

                <label className=" p-2">
                    <input
                    type="radio"
                    value="administrator"
                    name="role"
                    checked={role === "administrator"}
                    onChange={(e) => setRole(e.target.value)}
                    />
                    Administrator
                </label>

                <label className="p-2"> 
                    <input
                    type="radio"
                    value="storeOwner"
                    name="role"
                    checked={role === "storeOwner"}
                    onChange={(e) => setRole(e.target.value)}
                    />
                    Store Owner
                </label>
            </div>

            <div className="flex flex-col gap-4 items-center w-full ">
                
                <div className="w-80" >
                    <label className="font-medium text-gray-700">
                    Email :
                    <input className="w-full  border p-1 rounded-md"
                    type="text"
                    name="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    </label>
                    <div className="text-sm h-1">
                    {email.length > 0 && !email.includes("@") && (
                        <p className="text-red-500">Invalid Email!</p>
                    )}
                    </div>

                </div>

                <div className="w-80">
                    <label className="font-medium text-gray-700">
                    Password :
                    <input className=" w-full border p-1 rounded-md"
                    type="text"
                    name="password"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    </label>
                   <div className="text-sm h-1">
                    {getPasswordError() && (
                        <p className="text-red-500">{getPasswordError()}</p>
                    )}
                    </div>

                </div>

                <button onClick={handleLogin}
                className="w-30  m-5 bg-cyan-900 hover:bg-white text-white hover:text-cyan-800 hover:outline-1 font-semibold py-2 rounded-lg transition">
                    Login
                </button>
            </div>


        </div>
           
        </div>
    )

}

export default Loginform;