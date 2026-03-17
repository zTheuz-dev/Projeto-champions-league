import { Request, Response } from "express";
import { getPlayerService } from "../services/players-services";

export const getPlayer = async(req: Request, res: Response) => {
  const httpResponse = await getPlayerService();
  return res.status(httpResponse.statusCode).json(httpResponse.body);
  };