import ConnectDB from "./ConnectDB";
import Texts from './models/TextSchema';
import mongoose from "mongoose";
export default async function FIND_TEXT(scode){
    try{
    const isConnected=await ConnectDB();

    if(!isConnected){
        throw new Error("error")
    }
    
    // AS DB IS CONNECTED, now lets find if the code and if it exists give the text!

    const isExist= await Texts.findOne({code:scode})
    if(isExist){
        return isExist.text;
    }

    return false;
}
catch(err){
    console.error("Error logs:",err)
    return false;
}


}