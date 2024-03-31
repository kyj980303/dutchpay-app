import Icon from "./atom/Icon";
import styled from "styled-components";
import colors from "../themes/colors";
import Flex from "./layouts/Flex";
import Box from "./layouts/Box";
import fontSizes from "../themes/fontSizes";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${colors.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentsContainer = styled.div`
  width: 25.312%;
  height: 795px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(148, 148, 148, 0.2); /* 그림자 설정 */
  background-color: ${colors.white};
  @media (max-width: 1600px) {
    width: 30%;
    height: 695px;
  }
`;
const Text = styled.p`
  color: ${colors.white};
  font-size: ${fontSizes.l};
  font-weight: bold;
  margin-top: -4px;
`;
interface props {
  children: any;
}
export const CenteredOverayContents = ({ children }: props) => {
  return (
    <>
      <Container>
        <ContentsContainer>
          <Box height="65px" $bgColor={colors.mainColor} padding="20px 23px">
            <Flex $gap="2%">
              <Icon iconName="icon" />
              <Text>더치페이</Text>
            </Flex>
          </Box>
          {children}
        </ContentsContainer>
      </Container>
    </>
  );
};
