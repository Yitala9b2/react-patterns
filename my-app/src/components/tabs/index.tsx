import { FC } from "react";
import { Button } from "../button";
import './style.scss'
import { TabsProps } from "./types";

export const Tabs: FC<TabsProps> = ({ onChange }) => {

	return (
		<div className="tabs">
			<Button onClick={() => onChange(false)}>users</Button>
			<Button onClick={() => onChange(true)}>form</Button>
		</div>
	);
};