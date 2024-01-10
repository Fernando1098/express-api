import express from "express";
import {generarToken} from "../guards/index.js";
const router = express.Router();

router.post('/login', (req, res) => {
  res.send(generarToken())
})

export default router