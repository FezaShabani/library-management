import Student from "../models/Student.js"
const TOKEN="voihjiogoi"

//ici je cree les fonctions qui seront ensuite des pages au front end
export const signUp = async (req, res, next) =>{
   
    try{

        const { firstname, lastname, username, id, password } = req.body;
        console.log("----------> req.body is ",req.body)

        if (!firstname || !lastname || !username || !id || !password) {
            return res.status(400).json({
                message: "Missing required fields in the request body."
            });
        }
        const newUser = new Student({ firstname, lastname, username, id, password });
        console.log(newUser);
         newUser.save()
         res.status(200).json("User created successfully!")

    }
    catch(error){
     
        res.status(200).json({
            message:"Something went wrong!",
            err: error
        })
        console.log(" this is the error",error)
    }
}

export const login= async(req,res,next)=>{
    Student.findOne({username: req.body.username})
    .exec()
    .then((student) => {
        if(!student) {
            return res.status(401).json({ error: "Auth failed"});
        }
        if(req.body.password!=student.password) {
            return res.status(401).json({ error: "Auth failed"});
        }
        const token = jwt.sign(
            {
            username: student.username,
            id: student.id,
        },
        TOKEN,
        {
            expiresIn: "2h",
        });
        return res
        .status(200)
        .json({ message: "Login successfully", token:token})

    })
    .catch(error=>{
        return res.status(400).json({ message: "Ooops something went wrong", error:error})
    })

}

export const getOneStudent = async(req, res, next) =>{
    try{
        const studentToFind = await Student.findById(request.body.id)
        res.status(200).json(studentToFind)
    }
    catch(error){
        restart.status(200).json("Student not found")
    }
}
export const getAllStudent = async(req, res, next) =>{
    try{
        const allStudent = await Student.find()
        res.status(200).json(allStudent)
    }
    catch(error){
        res.status(200).json("Error!")
    }
}