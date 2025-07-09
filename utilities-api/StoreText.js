import Texts from './models/TextSchema';
import mongoose from 'mongoose';
export default async function STORE_TEXT(text,code){

    try{
        const expiry= new Date(Date.now() + 10 * 60 * 1000);
        const isInserted = await Texts.create({text:text,code:code, expiresAt: expiry});

        console.log("Inserted Successfully!");
        return true;
    

    }
    catch(err){
        console.log("Insert Failed!",err)
        return false;
    }



}