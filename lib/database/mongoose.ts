import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = "mongodb+srv://dilippurohit204:123456dilip@cluster0.qjibzwv.mongodb.net/?retryWrites=true&w=majority";

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose

if(!cached) {
  cached = (global as any).mongoose = { 
    conn: null, promise: null 
  }
}

export const connectToDatabase = async () => {


  if(cached.conn) return cached.conn;

  if(!MONGODB_URL) throw new Error('Missing MONGODB_URL');

  cached.promise = 
    cached.promise || 
    mongoose.connect(MONGODB_URL, { 
      dbName: 'Imaginify', bufferCommands: false 
    })
console.log("mongo coonected ")
  cached.conn = await cached.promise;

  return cached.conn;

}