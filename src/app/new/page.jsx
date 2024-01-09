"use client";
import {TextField } from "@radix-ui/themes";
import {React,useCallback,useState} from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function page() {

  let [title,setTitle]= useState("");
  let [description,setDescription]= useState("")
  console.log(description)
  return (
    <>
   <h1 className="text-3xl font-inter" >Sumbit a Issue</h1> 
    <div className="max-w-2xl">
    <TextField.Root>
        <TextField.Input  color="green" variant="soft" value={title} placeholder="Enter your issue" onChange={(ev)=>{setTitle(ev.target.value)}}></TextField.Input>
    </TextField.Root>
    </div>
    <div>
    <ReactQuill theme="snow" value={description} onChange={setDescription} />
    </div>
    </>
  )
}
