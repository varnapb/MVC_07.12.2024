const mongoose = require("mongoose")

mongoose.connect(process.env.MongoDB_URL)
.then(() => {
    console.log('Connected!!')
})

.catch((err)=>{
    console.log(err)
})