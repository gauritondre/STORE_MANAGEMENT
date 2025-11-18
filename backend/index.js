import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// Login API
app.get("/login", (req, res) => {
  const { email, password, role, name } = req.query;

  console.log("Login request:", email, password, role, name);

  res.json({
    success: true,
    user: { email, role, name }
  });
});

app.post("/update-password", (req, res) => {
  const { email, password } = req.body;

  console.log("Password Update Request:", email, password);

  res.json({
    success: true,
    message: "Password updated successfully!"
  });
});

// Server
app.listen(4002, () => console.log("Backend running on 4002"));
