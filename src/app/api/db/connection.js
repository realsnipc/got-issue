import mongoose from "mongoose";

// Mongo DB User & Password
const user= process.env.DB_USER
const pass= process.env.DB_PASS

mongoose.connect(`mongodb+srv://${user}:${pass}@project.x6djzer.mongodb.net/DB`).then(()=>{
    console.log("Connected to MongoDB")
}).catch((e)=>{
    console.log("Connection to MongoDB Failed")
    console.log(e)
})