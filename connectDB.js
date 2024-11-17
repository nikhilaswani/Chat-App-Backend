const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://nikhilaswani927:sTpfro7UELaGomZ9@cluster0.hdlb3zq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        dbName: "exampleDB",
      }
    );
    console.log(`mongo connected`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectDB;
