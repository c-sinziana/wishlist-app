import React from "react";
import { Description } from "../atoms/Description";
import { Title } from "../atoms/Title";

export const IntroductionMolecule: React.FC = (): React.ReactElement => {
  return (
    <>
      <Title title="WishlistApp" />
      <Description description=" Write your great new wishlist here and share it with your friends!" />
    </>
  );
};
