import { CenteredOverayContents } from "../components";
import Box from "../components/layouts/Box";
import Flex from "../components/layouts/Flex";
import styled from "styled-components";
import fontSizes from "../themes/fontSizes";
import { useState } from "react";
import colors from "../themes/colors";
import Button from "../components/atom/Button";

interface props {
  activeColor?: string;
  inactiveColor?: string;
  border?: string;
  active?: boolean;
}

const TabTitle = styled.button<props>`
  color: ${(props) => (props.active ? props.activeColor : props.inactiveColor)};
  font-size: ${fontSizes.m};
  height: 40px;
  background-color: transparent;
  border: none;
  border-bottom: ${(props) =>
    props.active
      ? `2px solid ${props.activeColor}`
      : `2px solid ${props.inactiveColor}`};
  cursor: pointer;
  width: 100%;
  margin-bottom: 20px;
`;

const ContentBox = styled.div`
  padding: 28px 23px;
  height: 570px;
  overflow-y: scroll;
  @media (max-width: 1600px) {
    height: 470px;
  }
`;
export const Main = () => {
  const [activeTab, setActiveTab] = useState("진행 중");

  const changeTab = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <>
      <CenteredOverayContents>
        <ContentBox>
          <Flex $justifyContent="center">
            <TabTitle
              onClick={() => changeTab("진행 중")}
              active={activeTab === "진행 중"}
              activeColor={colors.mainColor}
              inactiveColor={colors.lightGray03}
            >
              진행 중
            </TabTitle>
            <TabTitle
              onClick={() => changeTab("완료")}
              active={activeTab === "완료"}
              activeColor={colors.mainColor}
              inactiveColor={colors.lightGray03}
            >
              완료
            </TabTitle>
          </Flex>
        </ContentBox>
        <Box padding="23px">
          <Button $bgColor={colors.mainColor} width="100%">
            새 더치페이
          </Button>
        </Box>
      </CenteredOverayContents>
    </>
  );
};
