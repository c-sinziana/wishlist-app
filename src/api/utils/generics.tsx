export interface GetRequest {
  search: string;
  start: string;
  limit: string;
}

export interface PutDeleteRequest {
  id: number;
}

export interface PostPutDeleteResponse {
  message: string;
}
