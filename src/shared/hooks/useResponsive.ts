import { useMediaQuery } from "@mantine/hooks";

export const useResponsive = () => {
	return {
		isMobile: useMediaQuery("(max-width: 48em)", true),
		isTablet: useMediaQuery("(max-width: 62em)", true),
		isDesktop: useMediaQuery("(min-width: 62.01em)", true),
	};
};
