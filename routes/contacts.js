import { Router } from "express";
import { addContacts, deleteContact, getContacts, updateContact } from "../controllers/contacts.js";


const contactRouter = Router();

//Get route for fetching addresses from database
contactRouter.get('/addresses', getContacts);
   
//Post route for storing new address 
contactRouter.post('/addresses',addContacts );
   
//Put route for updating address with new data
contactRouter.patch('/addresses/:id',updateContact);
   
//Delete route for deleting address with specified id
contactRouter.delete('/addresses/:id',deleteContact);


  export default contactRouter;