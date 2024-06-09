import { FC } from "react";
import { Button } from "../button";
import { IButtonProps } from "../button/types";
import "./style.scss";

export const ButtonWithLabel: FC<IButtonProps> = ({ onClick, children }) => {
	return (
		<div className="button-with-label">
			<p className="text" >нажми меня!</p>
			<Button onClick={onClick}>{children}</Button>
		</div>
	);
};