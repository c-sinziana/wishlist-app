import { Card, CardContent, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { UserApi, UserGetResponse } from "../../api/UserApi";
import UserCard from "../molecules/UserCard";

const UsersList = () => {
  const [users, setUsers] = useState<UserGetResponse>({
    users: [
      {
        id: 0,
        name: "",
        email: "",
        dob: "",
        phone: "",
      },
    ],
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    async function usersFunction() {
      await usersFetcher();
    }

    usersFunction();
  }, []);

  const usersFetcher = async () => {
    await UserApi.getUsers()
      .then((data) => {
        let resultUsers = [];

        let resultsCounter = data.users.length;
        for (let index = 0; index < resultsCounter; ++index) {
          resultUsers.push(data.users[index]);
        }

        setUsers({
          users: resultUsers,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Card>
        <CardContent>
          {users.users.map((user) => (
            <UserCard
              user={{
                id: user.id,
                name: user.name,
                email: user.email,
                dob: user.dob,
                phone: user.phone,
              }}
            />
          ))}
        </CardContent>
      </Card>
    </Container>
  );
};

export default UsersList;
