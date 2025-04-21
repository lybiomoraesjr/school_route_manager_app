import { NOTIFICATION_STYLES } from "@/libs/components/notifications/notifications.styles";
import { notifications } from "@mantine/notifications";

type NotificationType = keyof typeof NOTIFICATION_STYLES;

export const notify = (
	type: NotificationType,
	title: string,
	message: string,
	options?: {
		autoClose?: number;
		id?: string;
	}
) => {
	notifications.show({
		title,
		message,
		position: "top-right",
		autoClose: options?.autoClose ?? 4000,
		id: options?.id,
		...NOTIFICATION_STYLES[type],
	});
};

export const notifySuccess = (title: string, message: string) =>
	notify("SUCCESS", title, message);

export const notifyError = (title: string, message: string) =>
	notify("ERROR", title, message);

export const notifyWarning = (title: string, message: string) =>
	notify("WARNING", title, message);

export const notifyInfo = (title: string, message: string) =>
	notify("INFO", title, message);
