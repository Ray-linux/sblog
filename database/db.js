import mongoose from "mongoose";
mongoose.set('strictQuery', false)

const Connection = async (URL) => {
  // const URL = "mongodb://localhost:27017/blog";
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log(`Connection is successfull....................`);
  } catch (e) {
    console.log("Error while connecting..... ", e)
  }
}

export default Connection
