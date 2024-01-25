import express from "express";
import { connectDB } from "../db.js";
import rutaProfesor from "./routes/Profesor.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.send("Servicio Profesor");
});
app.use("/api", rutaProfesor);

app.listen(2024, () => {
  console.log("Servicio Profesor");
});
