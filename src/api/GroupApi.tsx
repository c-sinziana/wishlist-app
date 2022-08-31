import { AxiosResponse } from "axios";

import { instance } from "./utils/instance";
import { Group } from "./utils/entities";
import {
  PutDeleteRequest,
  PostPutDeleteResponse,
  GetRequest,
} from "./utils/generics";

interface GroupPostRequest {
  id: number;
  name: string;
  details: string;
  uid: number;
}

interface GroupUsersPostRequest {
  userIds: [number];
}

interface GroupPutInviteRequest {
  status: boolean;
}

interface GroupPostWishlistRequest {
  wishlistIds: [number];
}

const responseBody = (response: AxiosResponse) => response.data;

const groupRequest = {
  post: (url: string, body: GroupPostRequest) =>
    instance.post<GroupPostRequest>(url, body).then(responseBody),
  postUser: (url: string, body: GroupUsersPostRequest) =>
    instance.post<GroupUsersPostRequest>(url, body).then(responseBody),
  postWishlist: (url: string, body: GroupPostRequest) =>
    instance.post<GroupPostWishlistRequest>(url, body).then(responseBody),
  get: (url: string) => instance.get<GetRequest>(url).then(responseBody),
  put: (url: string) => instance.put<PutDeleteRequest>(url).then(responseBody),
  putInvite: (url: string) =>
    instance.put<GroupPutInviteRequest>(url).then(responseBody),
  delete: (url: string) =>
    instance.delete<PutDeleteRequest>(url).then(responseBody),
};

export const GroupApi = {
  postGroup: (group: Group): Promise<Group> =>
    groupRequest.post("/groups", group),
  postGroupUser: (
    id: string,
    group: GroupUsersPostRequest
  ): Promise<PostPutDeleteResponse> =>
    groupRequest.postUser(`/groups/${id}/users`, group),
  postGroupWishlist: (id: string, group: Group): Promise<Group> =>
    groupRequest.postWishlist(`/groups/${id}/wishlists`, group),
  getGroups: (): Promise<Group[]> => groupRequest.get("/groups"),
  putGroup: (id: string): Promise<PostPutDeleteResponse> =>
    groupRequest.put(`/groups/${id}`),
  putGroupInvite: (id: string): Promise<PostPutDeleteResponse> =>
    groupRequest.putInvite(`/groups/${id}/invite`),
  deleteGroup: (id: string): Promise<PostPutDeleteResponse> =>
    groupRequest.delete(`/items/${id}`),
};
