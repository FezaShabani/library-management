import mongoose from "mongoose";

//ici je cree la base de donnees donc en gros le tableau du user
const StudentSchema = new mongoose.Schema(
    {
        firstname: {type: String, unique: true, required: true},
        lastname: {type: String, unique: true, required: true},
        username: {type: String, unique: true, required: true},
        id: {type: String, unique: true, required: true},
        password: {type: String, required: true},
        books: {type: [String], required: true},

        isAdmin: {type: Boolean, default: false},
    },
    {timestamps: true }
);
export default mongoose.model("Student", StudentSchema);