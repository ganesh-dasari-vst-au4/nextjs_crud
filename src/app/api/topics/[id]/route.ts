import { NextRequest, NextResponse } from "next/server";
import Topic from "@/models/topic";
import {connectDB} from '../../../../libs/mongodb'

export async function PUT(request:NextRequest,{params}:any){
    try {
        const {id} = params
        const {newTitle:title, newDescription:description} = await request.json()

        await connectDB()
        await Topic.findByIdAndUpdate( id,{title,description})
        return NextResponse.json({status:200,message:'Topic Updated successfully'}) 
    
    } catch (error) {
        return NextResponse.json({status:500,message:error})
    }
}

export async function DELETE(request:NextRequest,{params}:any){
    try {
        const {id} = params
        await connectDB()
        await Topic.findByIdAndDelete({_id:id})
        return NextResponse.json({status:200,message:'Topic Deleted successfully'}) 
    
    } catch (error) {
        return NextResponse.json({status:500,message:error})
    }
}

export async function GET(request:NextRequest,{params}:any){
    try {
        const {id} = params
        await connectDB()
        const data=await Topic.findById(id)
        return NextResponse.json({status:200,message:'Topic retrieved successfully',data}) 
    } catch (error) {
        return NextResponse.json({status:500,message:error})
    }
}