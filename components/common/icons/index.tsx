import { IconType } from "react-icons";

export type IconCustomProps = {
	icon: IconType;
	className?: string;
	size?: number;
}

export const Icon = ({ icon, ...props }: IconCustomProps) => {
	const Icon = icon;
	return <Icon {...props} />
};