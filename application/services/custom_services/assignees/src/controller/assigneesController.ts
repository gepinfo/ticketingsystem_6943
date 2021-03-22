import { Request, Response } from 'express';
import { assigneesService } from '../service/assigneesService';
import { CustomLogger } from '../config/Logger'
let assignees = new assigneesService();

export class assigneesController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
assignees.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into assigneesController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from assigneesController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
assignees.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into assigneesController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from assigneesController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
assignees.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into assigneesController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from assigneesController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
assignees.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into assigneesController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from assigneesController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
assignees.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into assigneesController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from assigneesController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
assignees.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into assigneesController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from assigneesController.ts: GpCreate');
    })}


}