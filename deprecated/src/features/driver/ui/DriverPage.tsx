import { DriverTable } from "@/features/driver/components/DriverTable";
import { driversMock } from "@/mock/drivers.mock";
import { Container } from "@mantine/core";

const DriverPage = () => {
	return (
		<Container fluid>
			<DriverTable drivers={driversMock} />
		</Container>
	);
};

export default DriverPage;
