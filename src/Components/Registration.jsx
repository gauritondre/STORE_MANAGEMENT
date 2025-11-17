import {useState} from "react";

function Registrationform(){

    const [role, setRole] = useState("user");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");

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

  const handleSubmit = async () => {
  const userData = {
    name,
    email,
    address,
    password,
    role,
  };

    console.log(userData);

  try {
    const response = await fetch("http://192.168.1.146:4002/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      alert("Registration Successful");
    } else {
      alert("Failed to Register");
    }
  } catch (error) {
    console.error("Error:", error);
  }

  
};


    return(
        <div className="flex flex-col items-center justify-center mt-16 p-6">
             <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-lg">
                 <div className="text-2xl text-center font-bold mb-6 mt-4 text-gray-800">
                    {role === "user" && <h1> User Registration Form </h1>}
                    {role === "administrator" && <h1> Administrator Registration Form</h1>}
                    {role === "storeOwner" && <h1> Store-Owner Registration Form</h1>}

                </div>
                
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
                <div className="w-100">
                    <label className="font-medium text-gray-700">
                    Name :
                    <input className="w-full  border p-1 rounded-md"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    onChange={(e) => setName(e.target.value)}
                    />
                    </label>
                    <div className="text-sm h-1">
                    {name.length > 0 && (name.length < 10 || name.length > 60) && (
                        <p className="text-red-500">
                        Name must be between 10-60 characters
                        </p>
                    )}
                    </div>


                </div>
                
                <div className="w-100" >
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

                <div className="w-100">
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

                <div className="w-100">
                    <label className="font-medium text-gray-700">
                    Address : 
                    <input className="w-full  border p-1 rounded-md"
                    type="text"
                    name="address"
                    placeholder="Enter address"
                    onChange={(e) => setAddress(e.target.value)}

                    />
                    </label>
                    <div className="text-sm h-1">
                    {address.length > 400  && (
                        <p className="text-red-500">Address cannot exceed 400 characters</p>
                    )}
                    </div>

                </div>

                <button onClick={handleSubmit}
                className="w-30 m-5 bg-blue-600 hover:bg-white text-white hover:text-blue-600 hover:outline-1 font-semibold py-2 rounded-lg transition">
                    Register
                </button>
            </div>


        </div>
           
        </div>
    )

}

export default Registrationform;