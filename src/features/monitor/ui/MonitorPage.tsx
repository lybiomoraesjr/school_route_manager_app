import { MonitorsTable } from "@/features/monitor/components/MonitorsTable";
import { Container } from "@mantine/core";
import { monitorsMock } from "@/mock/monitors.mock";
const MonitorPage = () => {
	return (
		<Container fluid>
			<MonitorsTable monitors={monitorsMock} />
		</Container>
	);
};

export default MonitorPage;
