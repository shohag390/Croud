import mongoose from "mongoose";

const CroudSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  des: { type: String, required: true },
});

export default mongoose.model("Croud", CroudSchema);
