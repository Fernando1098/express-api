import mongoose from "mongoose";

const prestamoSchema = mongoose.Schema({
  monto: {
    type: Number,
    required: true
  },
  estado: {
    type: Boolean,
    default: true,
    required: true
  },
  fechaCreacion: { type: Date, default: Date.now },
})

export default mongoose.model('prestamos', prestamoSchema)