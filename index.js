import express from 'express';
import {} from 'express-validator';
import mongoose from 'mongoose';
import contactRouter from "./routes/contacts.js"
import expressOasGenerator from "express-oas-generator";

//Connect to database
await mongoose.connect(process.env.mongo_url);
console.log("Connected to Contact Database")



//Create express app
const app = express();
expressOasGenerator.handleResponses(app, {
  alwaysServeDocs: true,
  tags: ['contacts'],
  mongooseModels: mongoose.modelNames(),
})
//Apply middleware
app.use(express.json());

 
//Use Routes
app.use(contactRouter);
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs'));

 

 

//Listening for incoming request 
const PORT = 3004;
app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);
});


//acfHQGTDo12r1gPl


