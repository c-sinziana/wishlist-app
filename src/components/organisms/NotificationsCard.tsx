import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";

import { MyNotification } from "../../api/utils/entities";

export default function NotificationsCard({
  id,
  category,
  details,
}: MyNotification) {
  return (
    <Grid display="flex" flexDirection="column">
      <Card elevation={5}>
        <Grid xs={12} md={8} lg={15} item={true}>
          <CardContent key={id}>
            <Typography> {category}</Typography>
            <Typography> {details} </Typography>
          </CardContent>
        </Grid>
      </Card>
    </Grid>
  );
}
