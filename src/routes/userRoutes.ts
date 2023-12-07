import express, { Router } from "express";

const router: Router = express.Router();

router
  .route("/product")
  .get()
  .post()
  .delete();

export default router;
