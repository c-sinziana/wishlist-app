import React, { useState } from "react";
import { Alert, Button } from "@mui/material";

import { GroupApi } from "../../api/GroupApi";
import { Group } from "../../api/utils/entities";

type WishlistGroupCardProp = {
  wishlistIds: number[];
  groupId: number;
};

export default function WishlistGroupCard({
  groupId,
  wishlistIds,
}: WishlistGroupCardProp) {
  const [groupInviteResponse, setGroupInviteResponse] = useState<Group>();

  const [isResponseSuccesful, setIsResponseSuccessful] =
    useState<boolean>(false);

  const updateGroupWishlistFetcher = async (id: number, bodyData: number[]) => {
    await GroupApi.postGroupWishlist(id, bodyData)
      .then((data) => {
        if (data !== undefined) {
          setGroupInviteResponse(data);
          setIsResponseSuccessful(true);
        } else {
          setIsResponseSuccessful(false);
        }
      })
      .catch((err) => {
        setIsResponseSuccessful(false);
        console.log(err);
      });
  };

  return (
    <>
      <Button
        onClick={() => {
          updateGroupWishlistFetcher(groupId, wishlistIds);
        }}
      >
        Update group's wishlists!
      </Button>

      {isResponseSuccesful === true && (
        <Alert severity="success"> You have invited this group</Alert>
      )}
    </>
  );
}
