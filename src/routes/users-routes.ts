import { UsersController } from "@/controllers/users-controlle";
import { Router } from "express";

const usersRoutes = Router();
const usersController = new UsersController();

usersRoutes.post("/", usersController.create);

export { usersRoutes };
