import express from "express";
import {
  croudDeleteController,
  croudGetByIdController,
  croudGetController,
  croudUpdateController,
} from "../Controller/dataCroudController.js";

const croudRoute = express.Router();

croudRoute.get("/", croudGetController);
croudRoute.get("/:id", croudGetByIdController);
croudRoute.delete("/:id", croudDeleteController);
croudRoute.put("/:id", croudUpdateController);

export default croudRoute;
