import { Router } from "express";

/** import controllers */
import * as controller from "../controllers/controller.js";
const router = Router();

router.route("/");
/** Question Routes */

router
  .route("/questions")
  .get(controller.getQuestions) /**GET request */
  .post(controller.insertQuestions) /**POST request */
  .delete(controller.deleteQuestions); /**Delete request */

router
  .route("/result")
  .get(controller.getResult)
  .post(controller.storeResult)
  .delete(controller.deleteResult);

export default router;
