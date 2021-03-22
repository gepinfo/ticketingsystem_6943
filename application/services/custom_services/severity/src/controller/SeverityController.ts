import { Request, Response } from 'express';
import { SeverityService } from '../service/SeverityService';
import { CustomLogger } from '../config/Logger'
let Severity = new SeverityService();

export class SeverityController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
Severity.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into SeverityController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from SeverityController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
Severity.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into SeverityController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from SeverityController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
Severity.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into SeverityController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from SeverityController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
Severity.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into SeverityController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from SeverityController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
Severity.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into SeverityController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from SeverityController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
Severity.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into SeverityController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from SeverityController.ts: GpCreate');
    })}


}