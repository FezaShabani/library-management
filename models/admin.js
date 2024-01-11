import mongoose from "mongoose";

//ici je cree la base de donnees donc en gros le tableau du user, lie a la database
//mongooseSchema cree notre modele dans le database
const AdminSchema = new mongoose.Schema(
    {
        firstname: {type: String, required: true},
        lastname: {type: String, required: true},
        username: {type: String, unique: true, required: true},
        id: {type: String, unique: true, required: true},
        password: {type: String, required: true},

        isAdmin: {type: Boolean, default: true},
    },
    {timestamps: true }
);
export default mongoose.model("Admin", AdminSchema);
