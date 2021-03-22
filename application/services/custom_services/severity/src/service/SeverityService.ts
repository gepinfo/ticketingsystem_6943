import { Request, Response } from 'express';
import {SeverityDao} from '../dao/SeverityDao';
import { CustomLogger } from '../config/Logger'
let Severity = new SeverityDao();

export class SeverityService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into SeverityService.ts: GpDelete')
     const  SeverityId = req.params.id;
     Severity.GpDelete(SeverityId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from SeverityService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into SeverityService.ts: GpSearch')
     const  SeverityData = req.query;
     Severity.GpSearch(SeverityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from SeverityService.ts: GpSearch')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into SeverityService.ts: GpSearchForUpdate')
     const  SeverityData = req.body;
     Severity.GpSearchForUpdate(SeverityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from SeverityService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into SeverityService.ts: GpUpdate')
     const  SeverityData = req.body;
     Severity.GpUpdate(SeverityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from SeverityService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into SeverityService.ts: GpGetAllValues')
     
     Severity.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from SeverityService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into SeverityService.ts: GpCreate')
     const  SeverityData = req.body;
     Severity.GpCreate(SeverityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from SeverityService.ts: GpCreate')
         callback(response);
         });
    }


}