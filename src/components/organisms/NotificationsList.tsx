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
    async function getMyNotifications() {
      await notificationsFetcher();
    }

    getMyNotifications();
  }, []);

  const notificationsFetcher = async () => {
    await MeApi.getMeNotifications()
      .then((data) => {
        let receivedNotifications = [];

        let notificationsCounter = data.notifications.length;
        for (let index = 0; index < notificationsCounter; ++index) {
          receivedNotifications.push(data.notifications[index]);
        }

        setShownNotifications({
          notifications: receivedNotifications,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      {shownNotifications.notifications.map((notification) => (
        <NotificationsCard
          id={notification.id}
          category={notification.category}
          details={notification.details}
        />
      ))}
    </Container>
  );
};

export default NotificationsList;
