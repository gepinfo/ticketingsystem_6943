
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const assigneesSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   email: String
})

const assigneesModel = mongoose.model('assignees', assigneesSchema, 'assignees');
export default assigneesModel;
