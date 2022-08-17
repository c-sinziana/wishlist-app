import React from "react";
import { DescriptionAtom } from "../atoms/DescriptionAtom";
import { TitleAtom } from "../atoms/TitleAtom";

export const IntroductionMolecule: React.FC = (): React.ReactElement => {
  return (
    <div>
      <TitleAtom title="WishlistApp" />
      <DescriptionAtom description=" Write your great new wishlist here and share it with your friends!" />
    </div>
  );
};
