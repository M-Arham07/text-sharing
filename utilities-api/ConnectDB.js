import mongoose from "mongoose";

export default async function ConnectDB(){
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected to database Successfully")
        return true;
    }
    catch(err){
        console.error("Failed connecting to database!",err);
        return false;
    }

}