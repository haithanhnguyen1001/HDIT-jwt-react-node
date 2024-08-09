import express from "express";
import apiController from "../controller/apiController";
const router = express.Router();

/**
 *
 * @param {*} app - express app
 */
const initApiRoute = (app) => {
  /*test api */
  router.post("/register", apiController.handleRegister);
  return app.use("/api/v1", router);
};

export default initApiRoute;
