import styled from "styled-components";
import { CenteredOverayContents } from "../components";
import Box from "../components/layouts/Box";
import Flex from "../components/layouts/Flex";
import Icon from "../components/atom/Icon";
import Button from "../components/atom/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { createDuchPayState } from "../recoil/createDuchpayForm/atoms";

const Title = styled.p`
  font-weight: bold;
  font-size: 1rem;
`;

const DownImg = styled.p`
  font-size: 0.875rem;
  cursor: pointer;
`;

const GroupTitle = styled.p``;
const TotalPay = styled.p`
  font-weight: bold;
  font-size: 1.25rem;
`;

const Hr = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const ContentsText = styled.p``;
const SendTitle = styled.p`
  font-weight: bold;
  margin-bottom: 40px;
`;
const Complete = styled.p``;

export const Expense = () => {
  const duchPayData = useRecoilValue(createDuchPayState);
  const [isCheckedComplete, setIsCheckedComplete] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleCheckComplete = () => {
    setIsCheckedComplete((prev) => !prev);
  };

  const handleNav = () => {
    navigate("/");
  };

  const handleConfrimButton = () => {
    navigate("/");
  };

  return (
    <>
      <CenteredOverayContents>
        <Box padding="28px 23px">
          <Flex $justifyContent="space-between">
            <Title>정산 결과</Title>
            <DownImg>
              <Icon iconName="download" />
              이미지로 다운받기
            </DownImg>
          </Flex>
          <Box
            width="100%"
            height="250px"
            $bgColor="#F5F5F5"
            $marginBottom="10px"
            padding="4%"
            $borderRadius="10px"
          >
            <GroupTitle>저녁모임</GroupTitle>
            <Flex $justifyContent="space-between">
              <TotalPay>총 사용 금액</TotalPay>
              <TotalPay>50,000 원</TotalPay>
            </Flex>
            <Hr />
            <Flex $justifyContent="space-between">
              <ContentsText>총 인원</ContentsText>
              <ContentsText>4명</ContentsText>
            </Flex>
            <Flex $justifyContent="space-between">
              <ContentsText>결제자</ContentsText>
              <ContentsText>김연정</ContentsText>
            </Flex>
            <Flex $justifyContent="space-between">
              <ContentsText>결제일</ContentsText>
              <ContentsText>2024.03.03</ContentsText>
            </Flex>
          </Box>
          <Box
            width="100%"
            height="270px"
            $bgColor="#F5F5F5"
            padding="4%"
            $overFlowY="scroll"
            $borderRadius="10px"
          >
            <SendTitle>
              김연정님에게 보낼 금액
              <Icon iconName="arrow" />
            </SendTitle>
            <Flex $justifyContent="space-between">
              <ContentsText>김연동</ContentsText>
              <ContentsText>12,500 원</ContentsText>
            </Flex>
            <Flex $justifyContent="space-between">
              <ContentsText>김연오</ContentsText>
              <ContentsText>12,500 원</ContentsText>
            </Flex>
            <Flex $justifyContent="space-between">
              <ContentsText>김연언</ContentsText>
              <ContentsText>12,500 원</ContentsText>
            </Flex>
          </Box>
          <Box $marginTop="10px">
            <Complete onClick={handleCheckComplete}>
              {isCheckedComplete ? (
                <Icon iconName="inActiveCheckIcon" />
              ) : (
                <Icon iconName="activeCheckIcon" />
              )}
              완료처리하기
            </Complete>
          </Box>
          <Box>
            <Flex $gap="2%">
              <Button width="49%" $bgColor="#666670" onClick={handleNav}>
                취소
              </Button>
              <Button
                width="49%"
                $bgColor="#7C69E6"
                onClick={handleConfrimButton}
              >
                확인
              </Button>
            </Flex>
          </Box>
        </Box>
      </CenteredOverayContents>
    </>
  );
};
