import { VehiclesTable } from "@/features/vehicles/components/VehiclesTable";
import { vehiclesMock } from "@/mock/vehicles.mock";
import { Container } from "@mantine/core";

const VehiclePage = () => {
	return (
		<Container fluid>
			<VehiclesTable vehicles={vehiclesMock} />
		</Container>
	);
};

export default VehiclePage;
