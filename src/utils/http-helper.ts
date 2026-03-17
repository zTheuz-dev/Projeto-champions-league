import { httpResponse } from '../models/http-reponse-model';

export const ok = async(data: any): Promise<httpResponse> => {
  return {
    statusCode: 200,
    body: data
  }
}

export const noContent = async(): Promise<httpResponse> => {
  return {  
    statusCode: 204,
    body: null
  }
}