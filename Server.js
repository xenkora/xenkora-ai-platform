import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import ContactRoutes from "./Routes/ContactRoute.js";
import cors from "cors";
dotenv.config();
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1", ContactRoutes);
const PORT = process.env.PORT || 8282;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
