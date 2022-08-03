import express from "express";
import HealthController from "./controllers/health.controller";

const router = express.Router()

router.get('/health', HealthController)

export default router
