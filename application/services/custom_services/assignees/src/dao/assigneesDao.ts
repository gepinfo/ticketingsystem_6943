import * as mongoose from 'mongoose';
import assigneesModel from '../models/assignees';
import { CustomLogger } from '../config/Logger'


export class assigneesDao {
    private assignees = assigneesModel;
    constructor() { }
public GpDelete(assigneesId, callback){
new CustomLogger().showLogger('info', 'Enter into assigneesDao.ts: GpDelete')

this.assignees.findByIdAndRemove(assigneesId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from assigneesDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(assigneesData, callback){
new CustomLogger().showLogger('info', 'Enter into assigneesDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(assigneesData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.assignees.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from assigneesDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(assigneesData, callback){
new CustomLogger().showLogger('info', 'Enter into assigneesDao.ts: GpSearchForUpdate')

this.assignees.findOneAndUpdate({ _id: assigneesData._id }, assigneesData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from assigneesDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(assigneesData, callback){
new CustomLogger().showLogger('info', 'Enter into assigneesDao.ts: GpUpdate')

this.assignees.findOneAndUpdate({ _id: assigneesData._id }, assigneesData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from assigneesDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into assigneesDao.ts: GpGetAllValues')

this.assignees.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from assigneesDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(assigneesData, callback){
new CustomLogger().showLogger('info', 'Enter into assigneesDao.ts: GpCreate')
let temp = new assigneesModel(assigneesData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from assigneesDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}