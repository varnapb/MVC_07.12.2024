const Product = require("../model/product")

// Api Creation
    //ADD
const createProduct = async(req,res)=>{
    try {
        await Product(req.body).save()
        res.send({message:"Data added!!"})
    } catch (error) {
        console.log(error);
    }
}
    //VIEW
const viewProduct = async(req,res)=>{
    try {
        const products = await Product.find()
        res.send({products})
    } catch (error) {
        console.log(error);
    }
}
    //DELETE
const deleteProduct = async(req,res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.send({message:"Data deleted!!"})
    } catch (error) {
        console.log(error);
    }
}
//UPDATE
const updateProduct = async(req,res)=>{
    try {
        const update = await Product.findByIdAndUpdate(req.params.id,req.body)
        res.send({message:"Data Updated!!"})
    } catch (error) {
        console.log(error);
    }
}

    
module.exports={createProduct,viewProduct,deleteProduct,updateProduct}
