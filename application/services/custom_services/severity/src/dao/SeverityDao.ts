import * as mongoose from 'mongoose';
import SeverityModel from '../models/Severity';
import { CustomLogger } from '../config/Logger'


export class SeverityDao {
    private Severity = SeverityModel;
    constructor() { }
public GpDelete(SeverityId, callback){
new CustomLogger().showLogger('info', 'Enter into SeverityDao.ts: GpDelete')

this.Severity.findByIdAndRemove(SeverityId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from SeverityDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(SeverityData, callback){
new CustomLogger().showLogger('info', 'Enter into SeverityDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(SeverityData).forEach(
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
this.Severity.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from SeverityDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(SeverityData, callback){
new CustomLogger().showLogger('info', 'Enter into SeverityDao.ts: GpSearchForUpdate')

this.Severity.findOneAndUpdate({ _id: SeverityData._id }, SeverityData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from SeverityDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(SeverityData, callback){
new CustomLogger().showLogger('info', 'Enter into SeverityDao.ts: GpUpdate')

this.Severity.findOneAndUpdate({ _id: SeverityData._id }, SeverityData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from SeverityDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into SeverityDao.ts: GpGetAllValues')

this.Severity.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from SeverityDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(SeverityData, callback){
new CustomLogger().showLogger('info', 'Enter into SeverityDao.ts: GpCreate')
let temp = new SeverityModel(SeverityData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from SeverityDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}