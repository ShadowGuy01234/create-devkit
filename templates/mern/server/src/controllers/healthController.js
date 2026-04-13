import { getHealthPayload } from "../services/healthService.js";

export function getHealth(_req, res) {
  res.json(getHealthPayload());
}
