import React from 'react';
import {
	DiAndroid,
	DiBackbone,
	DiFirebase,
	DiReact,
	DiVisualstudio,
	DiZend,
} from 'react-icons/di';
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
	<Section id="tech">
		<SectionDivider />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText></SectionText>
		<List>
			<ListItem>
				<DiReact size="3rem" />
				<ListContainer>
					<ListTitle>Front-end</ListTitle>
					<ListParagraph>
						<br />
						React.js, HTML5, CSS3, CSS Frameworks
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size="3rem" />
				<ListContainer>
					<ListTitle>Back-end</ListTitle>
					<ListParagraph>
						<br />
						Node and Databases, PSQL, Jest, OOP, Nodemon, FS
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiVisualstudio size="3rem" />
				<ListContainer>
					<ListTitle>UI, Packages & More</ListTitle>
					<ListParagraph>
						<br />
						JSON, Heroku, Axios, Flutter
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
