
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ticketsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   description: String,
   types: { type: Schema.Types.String, ref: 'servicetypes' },
   severity: { type: Schema.Types.String, ref: 'Severity' },
   assignee: { type: Schema.Types.String, ref: 'assignees' }
})

const ticketsModel = mongoose.model('tickets', ticketsSchema, 'tickets');
export default ticketsModel;
