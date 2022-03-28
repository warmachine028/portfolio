import React from "react";

import { Section, SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import { data } from "../../constants/constants";

const Acomplishments = () => 
	<Section id="accomplishments">
		<SectionDivider />
		<SectionTitle main>Personal Accomplishments</SectionTitle>
		<Boxes>
			{data.map((card, i) => 
				<Box key={i}>
					<BoxNum>{card.number}+</BoxNum>
					<BoxText>{card.text}</BoxText>
				</Box>
			)}
		</Boxes>
	</Section>

export default Acomplishments;