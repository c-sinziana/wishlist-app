import React from "react";

type DescriptionProp = {
  description: string;
};

export const DescriptionAtom: React.FC<DescriptionProp> = ({
  description,
}: DescriptionProp): React.ReactElement => {
  return <h3>{description}</h3>;
};
