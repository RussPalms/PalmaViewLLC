import styled from "styled-components";
import Typewriter from "typewriter-effect";

const ComingSoon = () => {
	return (
		<>
			<ComingSoonContainer>
				<ComingSoonTag>
					<ComingSoonTypewriter
						onInit={(typewriter) => {
							typewriter
								.typeString("Welcome to PalmaView.")
								.pauseFor(2000)
								.deleteAll()
								.typeString("Our website will be up soon!")
								.start()
								.pauseFor(2000)
								.deleteAll();
						}}
					/>
				</ComingSoonTag>
			</ComingSoonContainer>
		</>
	);
};

export default ComingSoon;

const ComingSoonContainer = styled.div`
	position: relative;
	display: flex;
	height: 100%;
	width: 100%;
	align-items: center;
	justify-content: center;
`;

const ComingSoonTag = styled.p`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	height: 100%;
	width: 100%;
	flex: 1;
	font-weight: bold;
	font-size: 10em;
	text-align: center;
`;

const ComingSoonTypewriter = styled(Typewriter)``;
