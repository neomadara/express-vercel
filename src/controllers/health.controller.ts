import Logger from "../utils/logger";
import {Response, Request, NextFunction} from "express";

const HealthController = (_req: Request, res: Response, _next: NextFunction): Response => {
  const health = GetHealth()

  return res.status(200).json(health);
}

const GetHealth = () => {
  Logger.info('health check service')
  return {
    uptime: process.uptime(),
    message: 'Ok',
    timestamp: Date.now()
  }
}

export default HealthController
