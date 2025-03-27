import mongoose from "mongoose";

export default async function connect() {
  const URI = process.env.MongoDBURI;
  // // connect to mongoBD
  try {
    mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error", error);
  }
}
