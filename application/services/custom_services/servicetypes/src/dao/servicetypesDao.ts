import * as mongoose from 'mongoose';
import servicetypesModel from '../models/servicetypes';
import { CustomLogger } from '../config/Logger'


export class servicetypesDao {
    private servicetypes = servicetypesModel;
    constructor() { }
public GpDelete(servicetypesId, callback){
new CustomLogger().showLogger('info', 'Enter into servicetypesDao.ts: GpDelete')

this.servicetypes.findByIdAndRemove(servicetypesId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from servicetypesDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(servicetypesData, callback){
new CustomLogger().showLogger('info', 'Enter into servicetypesDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(servicetypesData).forEach(
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
this.servicetypes.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from servicetypesDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(servicetypesData, callback){
new CustomLogger().showLogger('info', 'Enter into servicetypesDao.ts: GpSearchForUpdate')

this.servicetypes.findOneAndUpdate({ _id: servicetypesData._id }, servicetypesData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from servicetypesDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(servicetypesData, callback){
new CustomLogger().showLogger('info', 'Enter into servicetypesDao.ts: GpUpdate')

this.servicetypes.findOneAndUpdate({ _id: servicetypesData._id }, servicetypesData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from servicetypesDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into servicetypesDao.ts: GpGetAllValues')

this.servicetypes.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from servicetypesDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(servicetypesData, callback){
new CustomLogger().showLogger('info', 'Enter into servicetypesDao.ts: GpCreate')
let temp = new servicetypesModel(servicetypesData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from servicetypesDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}