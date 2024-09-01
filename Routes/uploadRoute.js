import express from "express";
import { uploadCroud } from "../Controller/uploadCroudController.js";

const uploadRoute = express.Router();

uploadRoute.post("/", uploadCroud);

export default uploadRoute;
