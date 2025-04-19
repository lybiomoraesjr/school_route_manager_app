export const formatDateBR = (dateString: string): string => {
	const date = new Date(dateString);
	return new Intl.DateTimeFormat("pt-BR").format(date);
};
