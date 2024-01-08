import books from "../models/books.js"


export const addBook = async (req, res, next) => {
    try{
        const newBook = new books({title: req.body.title,
             authors: req.body.authors,
              isbn: req.body.isbn,
                                numberOfCopies: req.body.numberOfCopies})
                                await newBook.save()
                                res.status(200).json("Book added successfully!")
    }
    catch(error){
        res.status(200).json("Something went wrong!")
    }
}
export const getOneBook = async(req, res,next) => {
    try{
        const bookToFind = await books.findById(request.body.title)
        res.status(200).json(bookToFind)
    }
    catch(error){
        res.status(200).json("Not found")
    }
}
export const getAllBook = async(req, res,next) => {
    try{
        const allBook = await books.find()
        res.status(200).json(allBook)
    }
    catch(error){
        res.status(200).json("Error")
    }
}
export const deleteBook = async(req, res, next) => {
    try{
    const bookToDelete = await books.findByIdAndDelete(request.body.title)
    res.status(200).json("Book deleted")
    }
    catch(error){
        res.status(200).json("Error")
    }
}