import { DatesProviderProps } from "@mantine/dates";

export const dateSettings: DatesProviderProps["settings"] = {
	locale: "pt-br",
	firstDayOfWeek: 0,
	weekendDays: [0, 6],
};
