import { RoutesTable } from "@/features/route/components/RoutesTable";
import { routesMock } from "@/mock/routes.mock";
import { Container } from "@mantine/core";

const RoutePage = () => {
	return (
		<Container fluid>
			<RoutesTable routes={routesMock} />
		</Container>
	);
};

export default RoutePage;
