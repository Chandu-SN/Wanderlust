const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
     console.log("connected to db");
   })
   .catch((err) => {
     console.log(err);
   });
   
async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {        //function  first clean the random data by deleting and inserted
    await Listing.deleteMany({});
    initdata.data = initdata.data.map((obj) => ({...obj, owner: "6778f16175eccc9ec1aaef0b"}));
    await Listing.insertMany(initdata.data);
    console.log("data was intialized");
};

initDB();


