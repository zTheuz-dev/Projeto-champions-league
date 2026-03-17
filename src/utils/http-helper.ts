interface httpResponse {
  statusCode: number;
  body: any;
}

export const ok = async(data: any): Promise<httpResponse> => {
  return {
    statusCode: 200,
    body: data
  }
}