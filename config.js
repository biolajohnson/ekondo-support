import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongodb, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
    });
    console.log(`Mongodb connected: ${conn.connection.host}`);
  } catch (e) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};
export default connectDB;
