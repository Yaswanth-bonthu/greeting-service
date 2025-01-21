import {updateTicket, getAllTickets, getTicket, deleteTicket, createTicket} from "../controller/userTicketing.js";
import express from 'express';
import {authMiddleware} from '../middleware/authMiddleware.js';

const userTicketingRouter = express.Router();

userTicketingRouter.post("/", authMiddleware, createTicket);
userTicketingRouter.put("/:id", authMiddleware, updateTicket);
userTicketingRouter.get("/", authMiddleware, getTicket);
userTicketingRouter.get("/all", authMiddleware, getAllTickets);
userTicketingRouter.delete("/:id", authMiddleware, deleteTicket);

export default userTicketingRouter;