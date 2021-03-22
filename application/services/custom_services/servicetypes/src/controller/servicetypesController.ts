import { Request, Response } from 'express';
import { servicetypesService } from '../service/servicetypesService';
import { CustomLogger } from '../config/Logger'
let servicetypes = new servicetypesService();

export class servicetypesController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
servicetypes.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into servicetypesController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from servicetypesController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
servicetypes.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into servicetypesController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from servicetypesController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
servicetypes.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into servicetypesController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from servicetypesController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
servicetypes.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into servicetypesController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from servicetypesController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
servicetypes.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into servicetypesController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from servicetypesController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
servicetypes.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into servicetypesController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from servicetypesController.ts: GpCreate');
    })}


}