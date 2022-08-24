import React from "react";
import { Title } from "../atoms/Title";
import { RegisterTemplate } from "../templates/RegisterTemplate";

export const RegisterAccountPage: React.FC = (): React.ReactElement => {
  return (
    <>
      <Title title="Create an account here!" />
      <RegisterTemplate />
    </>
  );
};
