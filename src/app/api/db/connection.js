import mongoose from "mongoose";


mongoose.connect(`mongodb+srv://snipc:IchigoBankai@project.x6djzer.mongodb.net/DB`).then(()=>{
    console.log("Connected to MongoDB")
}).catch((e)=>{
    console.log("Connection to MongoDB Failed")
    console.log(e)
})