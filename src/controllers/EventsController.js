import { connection } from "../database/connection.js"

class EventsController {
  async index(req, res) {
    const events = await connection.event.findMany();
  
    const response = events.map(event => ({
      ...event,
      created_at: event.created_at.toLocaleString()
    }))

    return res.json(response);
  }

  async create(req, res) {
    const { title, nickname } = req.body;

    const event = await connection.event.create({
      data: {
        title,
        nickname
      }
    });

    return res.json(event);
  }


  async deleteAll(_req, res) {
    const events = await connection.event.deleteMany();

    return res.json(events);
  }
}

export { EventsController }