import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        author: {type: String, required: true},
        isbn: {type: String, required: true},
        numberOfCopies: {type: Number, required: true}
    },
    {timestamp: true}
);
export default mongoose.model("Books", BookSchema);