import { Request, Response, NextFunction } from "express";
import { SeverityController } from '../controller/SeverityController';


export class Routes {
    private Severity: SeverityController = new SeverityController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/Severity/:id').delete(this.Severity.GpDelete);
app.route('/Severity/get/search').get(this.Severity.GpSearch);
app.route('/Severity/get/update').put(this.Severity.GpSearchForUpdate);
app.route('/Severity').put(this.Severity.GpUpdate);
app.route('/Severity').get(this.Severity.GpGetAllValues);
app.route('/Severity').post(this.Severity.GpCreate);
     }

}