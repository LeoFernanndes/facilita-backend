import {Router, Request, Response} from "express";
import {FacilitaRestRequest} from "@/src/controllers/base/FacilitaRestRequest";
import {UserController} from "@/src/controllers/UserController";


const UserRoutes: Router = Router();

UserRoutes.get('/', async (req: Request, res: Response) => {
    const request = new FacilitaRestRequest(req.body, req.headers, req.params, req.query)
    const controller = new UserController(request)
    const response = await controller.listUsers();
    res.status(response.status).json(response.data)
})

export default UserRoutes