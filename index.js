import express from 'express';
import mongoose from 'mongoose';
import contactRouter from "./routes/contacts.js"

//Connect to database
await mongoose.connect(process.env.mongo_url);



//Create express app
const app = express();

//Apply middleware
app.use(express.json());

 
//Use Routes
app.use(contactRouter);
 

 

//Listening for incoming request 
const PORT = 3004;
app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);
});


//acfHQGTDo12r1gPl


