import React, { useEffect, useState } from "react";
import { Card, CardContent, Container } from "@mui/material";

import { MeApi, MeNotificationsGetResponse } from "../../api/MeApi";
import { MyNotification } from "../../api/utils/entities";
import { Initializers } from "../../constants/Initializers";
import NotificationsCard from "./NotificationsCard";

const NotificationsList = () => {
  const [shownNotifications, setShownNotifications] =
    useState<MeNotificationsGetResponse>({
      notifications: [Initializers.NOTIFICATION],
    });

  useEffect(() => {
    notificationsFetcher();
  }, []);

  const notificationsFetcher = async () => {
    await MeApi.getMeNotifications()
      .then((data) => {
        setShownNotifications({
          notifications: data.notifications,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      {shownNotifications.notifications.map((notification, index) => (
        <NotificationsCard
          id={index}
          category={notification.category}
          details={notification.details}
        />
      ))}
    </Container>
  );
};

export default NotificationsList;
