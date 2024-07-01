import { Schema, Model, Types, model } from "mongoose";



const contactSchema = new Schema({
    name: {type: String, unique: true, required:true },
    company: {type: String, required:true},
    phone: {type: String, required:true},
    email: {type: String, required:true},
    birthday: {type: String, required:true},
    address: {type: String, required:true},
    socials: {type: String, required:true},
    description: {type: String, required:true},
    photo: {type: String, required:true },
    favourite: {type:Boolean, default:false}
},{
    timestamps: true
})

// contactSchema.plugin(normalize)



export const ContactModel = model('contacts', contactSchema);