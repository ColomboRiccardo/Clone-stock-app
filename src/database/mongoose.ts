import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

declare global {
    var mongooseCache: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
    }
}

let cached = global.mongooseCache

if (!cached) {
    cached = global.mongooseCache = {conn: null, promise: null}
}

//This function establishes a connection with the mongoDB database, but also it caches it globally, not to create multiple ones whenever we hot reload the browser
export const connectToDatabase = async () => {
    if (!MONGODB_URI) throw new Error("MONGODB_URI must be set within .enbìv")

    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {bufferCommands: false})
    }

    try {
        cached.conn = await cached.promise;
    } catch (err) {
        cached.promise = null;
        throw err;
    }

    console.log("Connected to MongoDB " + process.env.NODE_ENV + MONGODB_URI)
}