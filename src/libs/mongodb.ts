import mongoose from 'mongoose'

export async function connectDB(){
    try {
       await mongoose.connect(process.env.MONGODB_URI!);
      const db = mongoose.connection;
        db.on("error",(err)=>{
            console.error('database connection error:',err)
            process.exit()
        })
        db.on("connected", function () {
        console.log("Database connected successfully");
        });
    } catch (error) {
        console.log('Mongo Connection Failed')
        console.log(error);
    }
}
