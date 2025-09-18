import { Router } from "express";
import { getRazorpayKey } from "../../controllers/config.controller";

const router = Router();

router.get("/getkey", getRazorpayKey);

export default router;