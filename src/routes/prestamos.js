import express from "express";
import prestamoSchema from "../models/prestamo.js"
const router = express.Router();

router.post('/create-loan', (req, res) => {
  const prestamo = prestamoSchema(req.body);
  prestamo
    .save()
    .then((response) => res.status(201).json(response))
    .catch(() => res.status(500).json({message: 'Error to create loan'}))
})

router.get('/loan-by-id/:id', (req, res) => {
  const {id} = req.params;
  prestamoSchema
    .findById(id)
    .then((response) => res.status(200).json(response))
    .catch(() => res.status(404).json({message: 'Error to list loan'}))
})

router.get('/all-loans', (req, res) => {
  prestamoSchema
    .find({estado: true})
    .then((response) => res.status(200).json(response))
    .catch(() => res.status(404).json({message: 'Error to list loans'}))
})

router.put('/update-loan/:id', (req, res) => {
  const {id} = req.params;

  prestamoSchema
    .updateOne({_id: id}, req.body)
    .then((response) => res.status(200).json(response))
    .catch(() => res.status(404).json({message: 'Error to update loan'}))
})

router.delete('/delete-loan/:id', (req, res) => {
  const {id} = req.params;

  prestamoSchema
    .updateOne({_id: id}, {$set: {estado: false}})
    .then((response) => res.status(200).json({message: "loan deleted"}))
    .catch(() => res.status(404).json({message: 'Error to list loans'}))
})

export default router