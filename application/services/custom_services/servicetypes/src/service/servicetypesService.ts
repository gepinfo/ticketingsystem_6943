import { Request, Response } from 'express';
import {servicetypesDao} from '../dao/servicetypesDao';
import { CustomLogger } from '../config/Logger'
let servicetypes = new servicetypesDao();

export class servicetypesService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into servicetypesService.ts: GpDelete')
     const  servicetypesId = req.params.id;
     servicetypes.GpDelete(servicetypesId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from servicetypesService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into servicetypesService.ts: GpSearch')
     const  servicetypesData = req.query;
     servicetypes.GpSearch(servicetypesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from servicetypesService.ts: GpSearch')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into servicetypesService.ts: GpSearchForUpdate')
     const  servicetypesData = req.body;
     servicetypes.GpSearchForUpdate(servicetypesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from servicetypesService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into servicetypesService.ts: GpUpdate')
     const  servicetypesData = req.body;
     servicetypes.GpUpdate(servicetypesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from servicetypesService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into servicetypesService.ts: GpGetAllValues')
     
     servicetypes.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from servicetypesService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into servicetypesService.ts: GpCreate')
     const  servicetypesData = req.body;
     servicetypes.GpCreate(servicetypesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from servicetypesService.ts: GpCreate')
         callback(response);
         });
    }


}