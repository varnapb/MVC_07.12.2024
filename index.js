// Importing
const express = require("express")
const dotenv = require("dotenv")
const ProductRoutes = require("./routes/product_routes")
const UserRoutes = require("./routes/user_routes")


// Initializing
const app = express()
dotenv.config()
require("./config/database")

//midd
app.use(express.json());

//useroute
app.use("/api/products",ProductRoutes)
app.use("/api/user",UserRoutes)

// Api creation

// Port
const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`Port is running ${PORT}`);
});
