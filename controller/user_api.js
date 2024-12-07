const User = require("../model/user")

const createUser = async(req,res)=>{
    try {
        await User(req.body).save()
        res.send({message:"Data added!!"})
    } catch (error) {
        console.log(error);
    }
}

const viewUser = async(req,res)=>{
    try {
        const user = await User.find()
        res.send({user})
    } catch (error) {
        console.log(error);
    }
}

const deleteUser = async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.send({message:"Data deleted!!"})
    } catch (error) {
        console.log(error);
    }
}

const updateUser = async(req,res)=>{
    try {
        const update = await User.findByIdAndUpdate(req.params.id,req.body)
        res.send({message:"Data Updated!!"})
    } catch (error) {
        console.log(error);
    }
}
module.exports={createUser,viewUser,deleteUser,updateUser}