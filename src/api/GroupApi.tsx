import { AxiosResponse } from "axios";

import { instance } from "./utils/instance";
import { Group, Item, Member, User, Wishlist } from "./utils/entities";
import {
  PutDeleteRequest,
  PostPutDeleteResponse,
  GetRequest,
} from "./utils/generics";

export interface GroupUsersPostRequest {
  userIds: number[];
}

export interface GroupPostPutRequest {
  name: string;
  details: string;
}

export interface GroupPutInviteRequest {
  status: boolean;
}

export interface GroupPostWishlistRequest {
  wishlistIds: number;
}

export interface GroupPostResponse {
  id: number;
  name: string;
  details: string;
}

export interface GroupGetResponse {
  groups: {
    id: number;
    createdAt: string;
    name: string;
    details: string;
    wishlists: Wishlist[];
    users: User[];
  }[];
}

export interface GroupsGetSharedResponse {
  groups: [
    {
      name: string;
      details: string;
      id: number;
      uid: number;
      wishlists: [
        {
          name: string;
          details: string;
          id: number;
          uid: number;
          items: Item[];
          members: Member[];
        }
      ];
    }
  ];
}

const responseBody = (response: AxiosResponse) => response.data;

const groupRequest = {
  post: (url: string, body: GroupPostPutRequest) =>
    instance.post<GroupPostPutRequest>(url, body).then(responseBody),
  postUser: (url: string, body: GroupUsersPostRequest) =>
    instance.post<GroupUsersPostRequest>(url, body).then(responseBody),
  postWishlist: (url: string, body: number[]) =>
    instance.post<GroupPostWishlistRequest>(url, body).then(responseBody),
  get: (url: string) => instance.get<GetRequest>(url).then(responseBody),
  getSharedGroups: (url: string) =>
    instance.get<GetRequest>(url).then(responseBody),
  put: (url: string, body: GroupPostPutRequest) =>
    instance.put<GroupPostPutRequest>(url, body).then(responseBody),
  putInvite: (url: string) =>
    instance.put<GroupPutInviteRequest>(url).then(responseBody),
  delete: (url: string) =>
    instance.delete<PutDeleteRequest>(url).then(responseBody),
};

export const GroupApi = {
  postGroup: (group: GroupPostPutRequest): Promise<GroupPostResponse> =>
    groupRequest.post("/groups", group),
  postGroupUser: (
    id: number,
    groupUsers: GroupUsersPostRequest
  ): Promise<PostPutDeleteResponse> =>
    groupRequest.postUser(`/groups/${id}/users`, groupUsers),
  postGroupWishlist: (id: number, wishlistIds: number[]): Promise<Group> =>
    groupRequest.postWishlist(`/groups/${id}/wishlists`, wishlistIds),
  getGroups: (): Promise<GroupGetResponse> => groupRequest.get("/groups"),
  getSharedGroups: (): Promise<GroupsGetSharedResponse> =>
    groupRequest.get("/groups/shared"),
  putGroup: (
    id: number,
    group: GroupPostPutRequest
  ): Promise<PostPutDeleteResponse> => groupRequest.put(`/groups/${id}`, group),
  putGroupInvite: (
    id: number,
    bodyData: GroupPutInviteRequest
  ): Promise<PostPutDeleteResponse> =>
    groupRequest.putInvite(`/groups/${id}/invite`),
  deleteGroup: (id: number): Promise<PostPutDeleteResponse> =>
    groupRequest.delete(`/groups/${id}`),
};
