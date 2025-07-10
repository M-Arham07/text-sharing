
import FIND_TEXT from "@/utilities-api/FindText"
import { NextResponse } from "next/server";
export async function GET(request){




    const {searchParams}=new URL(request.url)
    const code=searchParams.get("code") // console.log(code)

    // NOW LETS SEARCH FOR CODE
   const found_text = await FIND_TEXT(code);

   if(!found_text){ //if text not found:
    return NextResponse.json({errmsg:"Text not found!"},{status:400});
   }

   // if found, do this:

   return NextResponse.json({text:found_text},{status:200});



    
    

}






//     const url=new URL(request.url)
//     const params=url.searchParams;
//    const code= params.get("code")
//    console.log(code)
    