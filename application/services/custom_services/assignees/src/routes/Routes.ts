import { Request, Response, NextFunction } from "express";
import { assigneesController } from '../controller/assigneesController';


export class Routes {
    private assignees: assigneesController = new assigneesController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/assignees/:id').delete(this.assignees.GpDelete);
app.route('/assignees/get/search').get(this.assignees.GpSearch);
app.route('/assignees/get/update').put(this.assignees.GpSearchForUpdate);
app.route('/assignees').put(this.assignees.GpUpdate);
app.route('/assignees').get(this.assignees.GpGetAllValues);
app.route('/assignees').post(this.assignees.GpCreate);
     }

}