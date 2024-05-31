import mongoose from "mongoose";
const connectionToDb = async () => {
  const connection = await mongoose.connect(process.env.MONGO_DB_CONNECTION_URL);
  if (connection) {
    console.log("Connection has been placed successfully");
  }
};

export default connectionToDb;