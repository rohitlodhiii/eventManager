import mongoose from 'mongoose' ;

const MONGODB_URI = "mongodb+srv://rohitlodhi2154:123123123@cluster0.n0tkbuq.mongodb.net/?retryWrites=true&w=majority"
let cached = (global as any).mongoose || {conn : null , promise : null};

export const connectToDatabase = async () =>{
    if(cached.conn) return cached.conn ;

    if(!MONGODB_URI) throw new Error(" URI Is missing");

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI , {
        dbName : "eventmanager" ,
        bufferCommands : false
    })

    cached.conn = await cached.promise ;

    return cached.conn ;
}