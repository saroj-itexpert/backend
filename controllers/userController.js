const db = require("../database/connection");
const user = db.users;


exports.fetchUser = async (req, res)=>{
    try{
        const data = await user.findAll()
        res.status(200).json({"message":data});

    }catch(error){
        res.status(500).json({"message":error.message});
    }   
    
}

exports.postUser = async(req, res)=>{
    try {
        const {username, password} = req.body;
        const data = user.create({
            username,
            password
        });
        res.status(200).json({"data": "User detail posted"})
    } catch (error) {
       res.status(500).json({"message": error.message});
    }
}