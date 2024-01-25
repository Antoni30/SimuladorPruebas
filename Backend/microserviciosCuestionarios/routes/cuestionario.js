import { Router } from "express";
import Cuestionario from "../Model/Cuestionario-model.js"

const routes = Router();

routes.get("/cuestionario",async (req,res)=>{
    try {
        const addTask = await Cuestionario.find();
        res.status(201).json(addTask);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error - No se encuentra ningun cuestionario");
    }
});

routes.get("/cuestionario/:id",async (req,res)=>{
  const { id } = req.params;
  try {
      const addTask = await Cuestionario.find({ id_profesor:id});
      res.status(201).json(addTask);
  } catch (error) {
      console.log(error);
      res.status(500).send("Error - No se encuentra ningun pregunta");
  }
});


routes.post("/cuestionario",async(req,res)=>{
    const addCuestionario = Cuestionario(req.body);
    try {
      const addTask = await addCuestionario.save();
      res.status(201).json(addTask);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error al guardar el cuestionario");
    }
});

routes.put("/cuestionario/:id", async (req, res) => {
    const { id } = req.params;
    const { id_profesor, pregunta, respuesta} = req.body;
    try {
      const cuestionarios = await Cuestionario.updateOne(
        { _id: id },
        { $set: { id_profesor, pregunta, respuesta} }
      );
      res.status(201).json(Cuestionario);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error - No se encuentra cuestionario");
    }
});

routes.delete("/cuestionario/:id",async(req,res)=>{
    const { id } = req.params;
    try {
      const addTCuestionario = await Cuestionario.deleteOne({_id: id});
      res.status(201).json(addTCuestionario);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error - No se encuentra cuestionario");
    }
});

export default routes;