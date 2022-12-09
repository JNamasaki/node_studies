import mongoose from "mongoose"

mongoose.connect("mongodb+srv://JNamasaki:10Ladinos@cluster0.gj6x7ab.mongodb.net/test")



let db = mongoose.connection;

export default db;