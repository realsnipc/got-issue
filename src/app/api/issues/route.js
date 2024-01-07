import { NextResponse } from 'next/server'
import '../db/connection.js'

import issueModel from '../db/models/issue.js'

export async function GET(){
    const res= await issueModel.find()
    return NextResponse.json(res)
}


export async function POST(req){
    const body= await req.json()
    if(!body.title || !body.description){
        return new NextResponse.json({message:"Bad Request"},{status:400})
    }
    // Save data to issueModel in DB
    const issueDoc= new issueModel(body)
    await issueDoc.save()
    return NextResponse.json({ message: 'Created successfully' },{status:201})
}

export function PUT(){}

export function DELETE(){}