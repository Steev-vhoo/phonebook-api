import { ContactModel } from "../models/contacts.js";

export const getContacts = async (req, res, next) => {
  try {
    // Get query params- the structuring
    // const {
    //   filter = "{}",
    //   sort = "{}",
    //   fields = "{}",
    //   limit = 10,
    //   skip = 0
    // } = req.query;
    // if (contact) {
    // Get all filtered contacts from database
    // const allContacts = await ContactModel
    //   .find(JSON.parse(filter))
    //   .sort(JSON.parse(sort))
    //   .select(JSON.parse(fields))
    //   .limit(limit)
    //   .skip(skip);
    // Return response
    // res.status(200).json(allContacts);
    // } else if (contact) {
    //Get all contacts from database
    const allContacts = await ContactModel.find()
    //Return all contacts
    res.status(200).json(allContacts)
    // } else {
    //Get one contacts from database
    // const allContacts = await ContactModel.find(req.params.id)
    //Return all contacts
    // res.status(200).json(allContacts)

  } catch (error) {
    next(error);
  }
}
export const addContacts = async (req, res, next) => {

  try {
    //Add contacts to database
    const newContacts = await ContactModel.create({
      ...req.body
    });
    //Return response
    res.status(201).json(newContacts) //Update
  } catch (error) {
    next(error);
  }
}



export const deleteContact = async (req, res, next) => {
  try {
    //Delete contact by ID
    const deletedContact = await ContactModel.findByIdAndDelete(req.params.id)
    //Return response
    res.status(200).json(deletedContact)

  } catch (error) {
    next(error)
  }
}

export const updateContact = async (req, res) => {
  try {
    const updatedAddress = await Address.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedAddress);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

