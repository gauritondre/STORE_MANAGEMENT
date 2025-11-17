import {useState} from "react";

function Storeform(){

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

  const handleSubmit = async () => {
  const userData = {
    name,
    address,
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
        <div className="flex flex-col items-center justify-center p-6">
             <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-lg">

                <h1 className="font-bold flex justify-center m-4 text-xl text-gray-800">Store Details</h1>
                 

            <div className="flex flex-col gap-4 items-center w-full ">
                <div className="w-100">
                    <label className="font-medium text-gray-700">
                    Store Name :
                    <input className="w-full  border p-1 rounded-md"
                    type="text"
                    name="storeName"
                    placeholder="Enter store name"
                    onChange={(e) => setName(e.target.value)}
                    />
                    </label>
                    <div className="text-sm h-1">
                    {name.length > 0 && (name.length < 5 || name.length > 60) && (
                        <p className="text-red-500">
                        Name must be between 5-60 characters
                        </p>
                    )}
                    </div>


                </div>

                <div className="w-100">
                    <label className="font-medium text-gray-700">
                    Address : 
                    <input className="w-full  border p-1 rounded-md"
                    type="text"
                    name="storeAddress"
                    placeholder="Enter store address"
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
                className="w-25 mt-6 bg-blue-600 hover:bg-white text-white hover:cursor-pointer hover:text-blue-600 hover:outline-1 font-semibold py-1.5  rounded-lg transition">
                    Register
                </button>
            </div>


        </div>
           
        </div>
    )

}

export default Storeform;