import e, { response } from 'express';
import { PlayerModel } from '../models/player-models';
import { deleteOnePlayer, findAllPlayers, findAndModifyPlayer, findPlayerById, insertPlayer } from '../repositories/players';
import { badRequest, created, noContent, ok } from '../utils/http-helper';
import { StatisticsModel } from '../models/statistics-models';

export const getPlayerService = async () => {

 const data = await findAllPlayers();
  let response = null;

  if (data) {
    response = await ok(data);
  }else {
    response = await noContent();

  }

  return response;
}

export const getPlayerByIdService = async (id: number) => {
    //Pedir dados para o repositório
    const data = await findPlayerById(id);
    let response = null;

    if (data) {
      response = await ok(data);
    } else {
      response = await noContent();
    }
    return response;
}

export const createPlayerService = async (player: PlayerModel) => {
  let response = null;

  //verificar se esta vazio
  if (Object.keys(player).length !== 0) {
    await insertPlayer(player);
    response = await created();

  } else {
    response = await badRequest();
  }
  return response;
} 

export const deletePlayerService = async (id: number) => {
  let response = null;
  await deleteOnePlayer(id);

  response = await ok({ message: "Player deleted successfully" });
  return response;
}

export const updatePlayerService = async (id: number, bodyValues: StatisticsModel) => {

    const data = await findAndModifyPlayer(id, bodyValues);
    let response = null;

  if (Object.keys(bodyValues).length !== 0) {
    response= await badRequest();
    }else {
    response = await ok(data);
    }
      return response;
  }
  

