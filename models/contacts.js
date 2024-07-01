import { Schema, Model, Types, model } from "mongoose";



const contactSchema = new Schema({
    name: {type: String, unique: true, required:true },
    company: {type: String, required:true},
    phone: {type: String, required:true},
    email: {type: String, required:true},
    birthday: {type: Date},
    address: {type: String},
    socials: {type: String},
    description: {type: String},
    photo: {type: String},
    favourite: {type:Boolean, default:false}
},{
    timestamps: true
})

// contactSchema.plugin(normalize)



export const ContactModel = model('contacts', contactSchema);