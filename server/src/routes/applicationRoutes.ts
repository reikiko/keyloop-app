import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { listApplication, createApplication, updateApplicationStatus } from "../controllers/applicationControllers";

const router = express.Router();

router.post("/", authMiddleware([ "tenant"]), createApplication);
router.put("/:id/status", authMiddleware([ "manager"]), updateApplicationStatus);
router.get("/", authMiddleware(["manager", "tenant"]), listApplication);

export default router;
