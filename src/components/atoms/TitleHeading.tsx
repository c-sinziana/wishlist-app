import React from "react";

type TitleProp = {
  title: string;
};

export const TitleHeading: React.FC<TitleProp> = ({
  title,
}: TitleProp): React.ReactElement => {
  return <h1>{title}</h1>;
};
