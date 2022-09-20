import React from "react";
import { TitleHeading } from "../atoms/TitleHeading";
import { RegisterTemplate } from "../templates/RegisterTemplate";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Fab } from "@mui/material";

export const RegisterAccountPage: React.FC = (): React.ReactElement => {
  const navigate = useNavigate();
  return (
    <>
      <Fab sx={{ mr: "30rem" }}>
        <ArrowBackRoundedIcon
          fontSize="large"
          onClick={() => navigate("/login")}
        />
      </Fab>
      <TitleHeading title="Create an account here!" />
      <RegisterTemplate />
    </>
  );
};
