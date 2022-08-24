import React from "react";

type TitleProp = {
  title: string;
};

export const Title: React.FC<TitleProp> = ({
  title,
}: TitleProp): React.ReactElement => {
  return <h1>{title}</h1>;
};
