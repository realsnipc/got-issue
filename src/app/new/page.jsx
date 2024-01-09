"use client";
import {TextField } from "@radix-ui/themes";
import {React,useCallback,useState} from "react";
import "easymde/dist/easymde.min.css";

export default function page() {

  let [title,setTitle]= useState("");
  let [description,setDescription]= useState("")

  return (
    <>
   <h1 className="text-3xl font-inter" >Sumbit a Issue</h1> 
    <div className="max-w-2xl">
    <TextField.Root>
        <TextField.Input  color="green" variant="soft" value={title} placeholder="Enter your issue" onChange={(ev)=>{setTitle(ev.target.value)}}></TextField.Input>
    </TextField.Root>
    </div>
    <div>
      
    </div>
    </>
  )
}
