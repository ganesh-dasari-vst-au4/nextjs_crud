import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../libs/mongodb";
import Topic from "@/models/topic";

export async function POST(request:NextRequest){
    try {
        const {title, description}=await request.json()
        await connectDB()
        await Topic.create({title,description})
        return NextResponse.json({
            status:201,
            message:'Topic created successfully'
        }) 
    } catch (error) {
        return NextResponse.json({status:500,message:error})
    }
}

export async function GET(){
    try {
        await connectDB()
        const data=await Topic.find()
        return NextResponse.json({status:200,message:'Topic retrieved successfully',data}) 
    } catch (error) {
        return NextResponse.json({status:500,message:error})
    }
}