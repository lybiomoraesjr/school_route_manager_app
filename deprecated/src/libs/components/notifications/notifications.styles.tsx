import { NotificationProps } from "@mantine/core";
import { CheckCircle, XCircle, WarningCircle, Info } from "phosphor-react";

export const NOTIFICATION_STYLES: {
	[key in "SUCCESS" | "ERROR" | "WARNING" | "INFO"]: NotificationProps;
} = {
	SUCCESS: {
		color: "green",
		icon: <CheckCircle size={18} weight="fill" />,
	},
	ERROR: {
		color: "red",
		icon: <XCircle size={18} weight="fill" />,
	},
	WARNING: {
		color: "yellow",
		icon: <WarningCircle size={18} weight="fill" />,
	},
	INFO: {
		color: "blue",
		icon: <Info size={18} weight="fill" />,
	},
};
