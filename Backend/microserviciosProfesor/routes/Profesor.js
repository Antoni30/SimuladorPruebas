import { Router } from "express";
import Profesor from "../Model/Profesor-model.js";

const routes = Router();

routes.get("/profesor", async (req, res) => {
  try {
    const addProfe = await Profesor.find();
    res.status(201).json(addProfe);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error No se encuentra ningun dato");
  }
});

routes.get("/profesor/:id", async (req, res) => {
  const { id } = req.params;
    try {
      const profe = await Profesor.find({_id: id});
      const stringName= profe[0].name +" "+profe[0].apellido
      res.status(201).json(stringName);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error No se encuentra ningun dato");
    }
});

routes.post("/profesor", async (req, res) => {
  const profe = Profesor(req.body);
  try {
    const addProfe = await profe.save();
    res.status(201).send(addProfe)
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al agregar Profesor");
  }
});

routes.put("/profesor/:id", async (req, res) => {
  const { id } = req.params;
  const { name, apellido} = req.body;
  try {
    const profe = await Profesor.updateOne(
      { _id: id },
      { $set: { name, apellido} }
    );
    res.status(201).json(profe);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error No se encuentra ningun dato");
  }
});

routes.delete("/profesor/:id",async(req,res)=>{
    const { id } = req.params;
    try {
      const profe = await Profesor.deleteOne({_id: id});
      res.status(201).json(profe);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error No se encuentra ningun dato");
    }
});

export default routes;