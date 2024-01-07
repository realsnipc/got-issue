import mongoose from "mongoose";


const issueSchema= new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String},
    status: {type: String, required: true, default: "OPEN"},
    created_at    : { type: Date, required: true, default: Date.now },
    updated_at    : { type: Date, required: false } 
})
mongoose.models = {}
const issueModel= new mongoose.model('issue', issueSchema);


export default issueModel

