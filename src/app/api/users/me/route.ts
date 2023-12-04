import { getDataFromToken } from "@/helpers/getDataFromtoken";
import { NextRequest, NextResponse } from "next/server";
import {connect} from "@/dbconfig/dbconfig"
import User from "@/models/userModel"

connect();
export async function GET(request: NextRequest) {
    try {
const userid = await getDataFromToken(request)
 const user = await User.findOne({_id:userid})
 select("-password");
 return NextResponse.json({
    message: "User found",
    data: user
 })

    }catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}