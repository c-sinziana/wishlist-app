import React from "react";
import { NavigationButton } from "../atoms/NavigationButtonAtom";
import { IntroductionMolecule } from "../molecules/IntroductionMolecule";

export const WishlistStartOrganism: React.FC = (): React.ReactElement => {
  return (
    <>
      <IntroductionMolecule />
      <NavigationButton buttonText="Get started here!" />
    </>
  );
};
