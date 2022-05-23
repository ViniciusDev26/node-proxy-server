import { Router } from "express";
import { EventsController } from "../controllers/EventsController.js";

const eventsController = new EventsController();
const eventRoutes = Router();

eventRoutes.get("/", eventsController.index);
eventRoutes.post("/", eventsController.create);
eventRoutes.delete("/", eventsController.deleteAll);

export { eventRoutes }