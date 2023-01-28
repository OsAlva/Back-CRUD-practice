//db code
import mongoose from 'mongoose';
import { MONGODB_URI } from './config.js';

export async function conectDB() {
    try{
        const db = await mongoose.connect(MONGODB_URI);
        console.log("conected to database", db.connection.name);
    }
    catch(e){
        console.log("Error", e);
    }
   
}
