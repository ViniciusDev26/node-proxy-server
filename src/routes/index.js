import { Router } from "express";
import { eventRoutes } from "./event.routes.js";

const routes = Router();

routes.use('/events', eventRoutes);

export { routes }