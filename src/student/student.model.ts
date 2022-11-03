import * as mongoose from 'mongoose';

export const studentSchema = new mongoose.Schema({
    name: {type: String, required: true}
    tia: {type: String, required: true}
    course: {type: String, required: true}
})

export interface Student extends mongoose.Document {
    id: String;
    name: String;
    tia: String;
    course: String;
}