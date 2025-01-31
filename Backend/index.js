import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config.js";

// App config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
connectDB();

// API endpoint
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// {
//   "email":"bikash@gmail.com",
//   "password":"123545678"
// }
