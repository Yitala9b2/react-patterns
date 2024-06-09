import { FC } from "react";
import "./style.scss";

import { IUserProps } from "./types";
import { CardInfo } from "./parts";

export const MemberCard: FC<IUserProps> = ({ name, username, phone, website }) => {

    const props =  {username, phone, website};
  return (
    <div className="member-card">
      <p className="title">{name}</p>
      <CardInfo  {...props} />
    </div>
  );
};
