import React, { ReactNode } from "react";
import "./index.scss";

interface IMainHeader {
  heading: string;
  text?: string;
  name?: string;
  date?: string;
  select?: ReactNode;
}

const MainHeader: React.FC<IMainHeader> = ({
  heading,
  text,
  name,
  date,
  select,
}) => {
  return (
    <div className="main_header d-flex">
      <div className="text_header">
        <h1>{heading}</h1>
        <div className="intro_block">
          <div className="intro_wrap">
            <span className="intro_text">{text}</span>
            <span className="intro_name">{name}</span>
          </div>
          <span className="intro-date">{date}</span>
        </div>
      </div>
      {select && <div className="select_header">{select}</div>}
    </div>
  );
};

export default MainHeader;
