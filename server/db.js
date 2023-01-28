import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

export async function conectDB() {
    try{
        const db = await mongoose.connect(process.env.MONGODB_URI);
        console.log("conected to database", db.connection.name);
    }
    catch(e){
        console.log("Error", e);
    }
   
}
