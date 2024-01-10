import express from "express"
import mongoose from "mongoose";
import "dotenv/config"
import prestamosRouter from "./routes/prestamos.js"
import authRouter from "./routes/auth.js"
import {verificarToken} from "./guards/index.js";

const app = express();
const port = process.env.PORT

//middlewares
app.use(express.json())
app.use('/api/v1' , authRouter)
app.use('/api/v1' ,verificarToken, prestamosRouter)


app.get('/', (req, res) => {
  res.send('welcome to home page')
})

//mongodb connection
mongoose.connect('mongodb://127.0.0.1:27017/prestamos').then(() => {
  console.log('DB connected successful')
}).catch(()=>{
  console.log('Error connect to DB')
});

app.listen(port, () => console.log(`server listen on port ${port}`))