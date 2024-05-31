import express from "express";
import { getRoomDetails } from "../Controllers/getRoomDetails.js";
export const roomsRoute = express.Router();
roomsRoute.get('/getallrooms', getRoomDetails);
