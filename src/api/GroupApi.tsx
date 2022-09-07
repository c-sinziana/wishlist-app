import { AxiosResponse } from "axios";

import { instance } from "./utils/instance";
import { Group, Member, User, Wishlist } from "./utils/entities";
import {
  PutDeleteRequest,
  PostPutDeleteResponse,
  GetRequest,
} from "./utils/generics";

interface GroupUsersPostRequest {
  userIds: number[];
}

export interface GroupPostRequest {
  name: string;
  details: string;
}

interface GroupPutInviteRequest {
  status: boolean;
}

interface GroupPostWishlistRequest {
  wishlistIds: number[];
}

export interface GroupGetResponse {
  groups: {
    id: number;
    createdAt: string;
    name: string;
    details: string;
  }[];
}

const responseBody = (response: AxiosResponse) => response.data;

const groupRequest = {
  post: (url: string, body: GroupPostRequest) =>
    instance.post<GroupPostRequest>(url, body).then(responseBody),
  postUser: (url: string, body: GroupUsersPostRequest) =>
    instance.post<GroupUsersPostRequest>(url, body).then(responseBody),
  postWishlist: (url: string, body: Group) =>
    instance.post<GroupPostWishlistRequest>(url, body).then(responseBody),
  get: (url: string) => instance.get<GetRequest>(url).then(responseBody),
  put: (url: string) => instance.put<PutDeleteRequest>(url).then(responseBody),
  putInvite: (url: string) =>
    instance.put<GroupPutInviteRequest>(url).then(responseBody),
  delete: (url: string) =>
    instance.delete<PutDeleteRequest>(url).then(responseBody),
};

export const GroupApi = {
  postGroup: (group: GroupPostRequest): Promise<GroupPostRequest> =>
    groupRequest.post("/groups", group),
  postGroupUser: (
    id: number,
    group: GroupUsersPostRequest
  ): Promise<PostPutDeleteResponse> =>
    groupRequest.postUser(`/groups/${id}/users`, group),
  postGroupWishlist: (id: number, group: Group): Promise<Group> =>
    groupRequest.postWishlist(`/groups/${id}/wishlists`, group),
  getGroups: (): Promise<GroupGetResponse> => groupRequest.get("/groups"),
  putGroup: (id: number): Promise<PostPutDeleteResponse> =>
    groupRequest.put(`/groups/${id}`),
  putGroupInvite: (id: number): Promise<PostPutDeleteResponse> =>
    groupRequest.putInvite(`/groups/${id}/invite`),
  deleteGroup: (id: number): Promise<PostPutDeleteResponse> =>
    groupRequest.delete(`/groups/${id}`),
};
