import { Card, Text, Flex } from "@mantine/core";

interface Field {
	label: string;
	value: string;
}

interface SummaryCardProps {
	fields: Field[];
}

export const SummaryCard: React.FC<SummaryCardProps> = ({ fields }) => {
	return (
		<Card shadow="sm" padding="md" radius="md" withBorder>
			<Flex>
				{fields.map((field, index) => (
					<div key={index}>
						<Text size="sm" c="dimmed">
							{field.value}
						</Text>
					</div>
				))}
			</Flex>
		</Card>
	);
};
