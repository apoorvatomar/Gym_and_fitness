const mongoose = require("mongoose");

// const URI = process.env.MONGODB;   isko bad main use krunga knuki abhi ye chal nhi rha he sahi se
const URI =
  "mongodb+srv://rkushwaha1818:Mongo12345@cluster0.h94pkxd.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0";
const conntectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connect Seccessful to DB");
  } catch (error) {
    console.error("database connection Failed");
    process.exit(0);
  }
};

module.exports = conntectDB;
