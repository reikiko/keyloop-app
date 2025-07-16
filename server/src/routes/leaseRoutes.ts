import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { getLeases, getLeasePayments } from "../controllers/leaseControllers";

const router = express.Router();

router.post("/", authMiddleware(["manager", "tenant"]), getLeases);
router.post(
  "/:id/payments",
  authMiddleware(["manager", "tenant"]),
  getLeasePayments,
);

export default router;
