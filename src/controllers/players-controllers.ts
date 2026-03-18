import { Request, Response } from "express";
import { createPlayerService, deletePlayerService, getPlayerByIdService, getPlayerService, updatePlayerService } from "../services/players-services";
import { noContent } from "../utils/http-helper";
import { StatisticsModel } from "../models/statistics-models";

export const getPlayer = async(req: Request, res: Response) => {
  const httpResponse = await getPlayerService();
  return res.status(httpResponse.statusCode).json(httpResponse.body);
  };

  export const getPlayerbyId = async(req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await getPlayerByIdService(id);
    return res.status(httpResponse.statusCode).json(httpResponse.body);
  };

  export const postPlayer = async(req: Request, res: Response) => {
    const bodyValues = req.body;
    const httpResponse = await createPlayerService(bodyValues);

      if (httpResponse) {
        return res.status(httpResponse.statusCode).json(httpResponse.body);
      } else {
        const response = await noContent();
        return res.status(response.statusCode).json(response.body);

   }
  };

  export const deletePlayer = async (req:Request, res:Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await deletePlayerService(id);
  return res.status(httpResponse.statusCode).json(httpResponse.body);

  }

  export const updatePlayer = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    const bodyValues: StatisticsModel = req.body;
    const httpResponse = await updatePlayerService(id, bodyValues);
    return res.status(httpResponse.statusCode).json(httpResponse.body);
  }


