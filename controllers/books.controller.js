import books from "../models/books.js"


export const addBook = async (req, res, next) => {
    try{
        const newBook = new books({title: req.body.title,
             author: req.body.author,
              isbn: req.body.isbn,
            numberOfCopies: req.body.numberOfCopies})

            console.log("the new book is ",newBook)
             await newBook.save()
              res.status(200).json("Book added successfully!")
    }
    catch(error){
        console.log(error)
        res.status(500).send("Something went wrong!")
    }
}
export const getOneBook = async(req, res,next) => {
    try{
        console.log("the book is ", req.body.title)
        const bookToFind = await books.findOne({title:req.body.title})
        res.status(200).json(bookToFind)
    }
    catch(error){
        console.log(error)
        res.status(500).send("Book Not found")
    }
}
export const getAllBook = async(req, res,next) => {
    try{
        const allBook = await books.find()
        res.status(200).json(allBook)
    }
    catch(error){
        res.status(500).send("Error")
    }
}
export const deleteBook = async(req, res, next) => {
    try{
    const bookToDelete = await books.findByIdAndDelete(req.body.title)
    res.status(200).json("Book deleted")
    }
    catch(error){
        res.status(200).json("Error")
    }
}