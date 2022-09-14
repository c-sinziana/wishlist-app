import React from "react";
import { LoginTemplate } from "../templates/LoginTemplate";
import { TitleHeading } from "../atoms/TitleHeading";
import { LinkBehavior } from "../atoms/LinkBehavior";

export const LoginPage: React.FC = (): React.ReactElement => {
  return (
    <>
      <TitleHeading title="Login" />
      <LoginTemplate />
      <div>
        <span>
          Don't you have an account?
          <LinkBehavior href="/register">Sign up here</LinkBehavior>
        </span>
      </div>
    </>
  );
};
