"use client";
import { TextArea, TextField } from "@radix-ui/themes";

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
        <TextArea color="green" variant="soft" placeholder="Describe the issue..."/>
    </div>
    </>
  )
}
