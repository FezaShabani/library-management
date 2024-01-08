import admin from "../models/admin.js"


export const signUp = async (req, res, next) => {
    try{
        const newUser = new admin({firstname: req.body.firstname,
                                    lastname:req.body.lastname, 
                                    username: req.body.username, 
                                    id: req.body.id,
                                    password: req.body.password})
                                    await newUser.save()
                                    res.status(200).json("User created successfully!")

    }
    catch(error){
        res.status(200).json("Oops! Something went wrong")
    }
}