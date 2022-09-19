import { Card, CardContent, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { UserApi, UserGetResponse } from "../../api/UserApi";
import { User } from "../../api/utils/entities";
import UserCard from "../molecules/UserCard";

type UsersListProp = {
  renderedUsers: User[];
  isAddUser: boolean;
  isUserFromGroup: boolean;
  isFromGroup?: boolean;
  handleAddToGroup: (clickedItemId: number) => void;
};

export default function UsersList({
  renderedUsers,
  isAddUser,
  isUserFromGroup,
  isFromGroup,
  handleAddToGroup,
}: UsersListProp) {
  const [users, setUsers] = useState<UserGetResponse>({
    users: [],
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    usersFetcher();
  }, []);

  const usersFetcher = async () => {
    if (renderedUsers.length === 0 && isFromGroup === undefined) {
      await UserApi.getUsers()
        .then((data) => {
          setUsers({
            users: data.users,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setUsers({ users: renderedUsers });
    }
  };

  return (
    <Container>
      <Card>
        <CardContent>
          {users.users.map((user, index) => (
            <UserCard
              key={index}
              user={{
                id: user.id,
                name: user.name,
                email: user.email,
                dob: user.dob,
                phone: user.phone,
              }}
              isAddUserToGroup={isAddUser}
              isUserFromGroup={isUserFromGroup}
              handleAddToGroup= {handleAddToGroup}
            />
          ))}
        </CardContent>
      </Card>
    </Container>
  );
}
