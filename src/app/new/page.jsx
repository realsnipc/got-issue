"use client";
import {TextField } from "@radix-ui/themes";
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

export default function page() {
  return (
    <>
   <h1 className="text-3xl font-inter" >Sumbit a Issue</h1> 
    <div className="max-w-2xl">
    <TextField.Root>
        <TextField.Input  color="green" variant="soft" placeholder="Enter your issue"></TextField.Input>
    </TextField.Root>
    </div>
    <div>
        <SimpleMDE placeholder="Describe the issue..."/>
    </div>
    </>
  )
}
