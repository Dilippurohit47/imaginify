import mongoose ,{Mongoose} from "mongoose";

const URL = process.env.MONGO_URL!;

interface mongooseConnection {
    conn : Mongoose | null;
promise : Promise<Mongoose> | null;
}

let cached: mongooseConnection=(global as any).mongoose

if(!cached) {
    cached = (global as any).mongoose ={conn : null,  promise: null}
}

export const connectToDatabase = async()=>{
    if(cached.conn) return cached.conn;

    if(URL) throw new Error("MOngo db url is not defined ")


    cached.promise = cached.promise || mongoose.connect(URL , {dbName:"imaginify",bufferCommands:false})

    cached.conn = await cached.promise;

    return cached.conn

}