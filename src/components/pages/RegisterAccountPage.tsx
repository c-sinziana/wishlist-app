import React from "react";
import { TitleHeading } from "../atoms/TitleHeading";
import { RegisterTemplate } from "../templates/RegisterTemplate";

export const RegisterAccountPage: React.FC = (): React.ReactElement => {
  return (
    <>
      <TitleHeading title="Create an account here!" />
      <RegisterTemplate />
    </>
  );
};
