import { Request, Response } from 'express';
import {assigneesDao} from '../dao/assigneesDao';
import { CustomLogger } from '../config/Logger'
let assignees = new assigneesDao();

export class assigneesService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into assigneesService.ts: GpDelete')
     const  assigneesId = req.params.id;
     assignees.GpDelete(assigneesId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from assigneesService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into assigneesService.ts: GpSearch')
     const  assigneesData = req.query;
     assignees.GpSearch(assigneesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from assigneesService.ts: GpSearch')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into assigneesService.ts: GpSearchForUpdate')
     const  assigneesData = req.body;
     assignees.GpSearchForUpdate(assigneesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from assigneesService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into assigneesService.ts: GpUpdate')
     const  assigneesData = req.body;
     assignees.GpUpdate(assigneesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from assigneesService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into assigneesService.ts: GpGetAllValues')
     
     assignees.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from assigneesService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into assigneesService.ts: GpCreate')
     const  assigneesData = req.body;
     assignees.GpCreate(assigneesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from assigneesService.ts: GpCreate')
         callback(response);
         });
    }


}