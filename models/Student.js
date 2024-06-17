import mongoose from "mongoose";

//ici je cree la base de donnees donc en gros le tableau du user
const StudentSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true },
    id: { type: String, required: true },
    password: { type: String, required: true },
    books: { type: [{ takenAt: Date, isbn: String,title:String }], required: true },

    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true },
);
export default mongoose.model("Student", StudentSchema);
