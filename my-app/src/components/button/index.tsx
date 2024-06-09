import { FC } from "react";
import "./style.scss";
import { IButtonProps } from "./types";

export const Button: FC<IButtonProps> = ({ onClick, children }) => {

	return (
		<button className="button" onClick={onClick}>{children}</button>
	);
};