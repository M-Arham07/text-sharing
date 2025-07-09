
// route.js is special file that contains api endpoint, it isnt a server component
// its just like any other api! You use fetch in frontend!
import { NextResponse } from "next/server"
import ConnectDB from "@/utilities-api/ConnectDB";
import GenerateCode from "@/utilities-api/GenerateCode";
import mongoose from "mongoose";
import STORE_TEXT from "@/utilities-api/StoreText";

export async function POST(request) {

    const isConnected = await ConnectDB();

    if (!isConnected) {
        return NextResponse.json({ errmsg: "Connection to Database Failed!" }, { status: 400 });
    }

    

    const {text}=await request.json();  // console.log(text)
   

    const code = GenerateCode(); //DEBUGGING: console.log(code)

 /*************** STORE CODE AND TEXT IN DATABASE WITH EXPIRES AT FIELD ***************/

 const isInserted= await STORE_TEXT(text,code);

 if(!isInserted){
    return NextResponse.json({errmsg:"Server error! Please try again later."}, {status:500});
 }


 // AT THIS POINT, THE CODE + TEXT HAS BEEN INSERTED, SO LET'S SEND IT BACK TO CLIENT!

 return NextResponse.json({CODE:code}, {status:200});

 

}