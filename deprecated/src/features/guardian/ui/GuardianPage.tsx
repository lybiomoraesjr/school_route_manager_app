import { GuardiansTable } from "@/features/guardian/components/GuardiansTable";
import { guardiansMock } from "@/mock/guardians.mock";
import { Container } from "@mantine/core";

const GuardianPage = () => {
	return (
		<Container fluid>
			<GuardiansTable guardians={guardiansMock} />
		</Container>
	);
};

export default GuardianPage;
