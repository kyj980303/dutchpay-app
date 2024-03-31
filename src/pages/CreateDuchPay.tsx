import { CenteredOverayContents, Input } from "../components";
import styled from "styled-components";
import Box from "../components/layouts/Box";
import Button from "../components/atom/Button";
import colors from "../themes/colors";
import Flex from "../components/layouts/Flex";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { createDuchPayState } from "../recoil/createDuchpayForm/atoms";
import { AddMembers } from "../components/AddMembers";
import { useState } from "react";

const ContentBox = styled.div`
  padding: 28px 23px;
  height: 630px;
  @media (max-width: 1600px) {
    height: 530px;
  }
  overflow-y: scroll;
`;

type Inputs = {
  groupName: string;
  memberNum: number;
  content: string;
  price: number;
  payer: string;
  date: string;
};

export const CreateDuchPay = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useRecoilState(createDuchPayState);
  const [isActiveAddBtn, setIsActiveAddBtn] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<Inputs>();

  const createDutchpayData = (data: any) => {
    setFormData(data);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const data = [
    {
      title: "총 인원",
      inputType: "number",
      name: "memberNum",
      placeholder: "총 인원을 입력해 주세요.",
    },
    {
      title: "모임명",
      inputType: "text",
      name: "groupName",
      placeholder: "모임명을 입력해 주세요.",
    },
    {
      title: "내용",
      inputType: "text",
      name: "content",
      placeholder: "내용을 입력해 주세요.",
    },
    {
      title: "총 사용금액",
      inputType: "number",
      name: "price",
      placeholder: "총 사용금액을 입력해 주세요.",
    },
    {
      title: "결제자",
      inputType: "text",
      name: "payer",
      placeholder: "결제자를 입력해 주세요.",
    },
    {
      title: "날짜",
      inputType: "text",
      name: "date",
      placeholder: "날짜를 입력해 주세요.",
    },
  ];

  return (
    <>
      <CenteredOverayContents>
        <ContentBox>
          {data.map((item: any, index: number) => {
            if (item.title !== "총 인원") {
              return (
                <Input
                  key={index}
                  title={item.title}
                  inputType={item.inputType}
                  register={register}
                  name={item.name}
                  placeholder={item.placeholder}
                />
              );
            } else {
              return (
                <AddMembers key={index} setIsActiveAddBtn={setIsActiveAddBtn} />
              );
            }
          })}
        </ContentBox>
        <Box padding="20px 23px">
          <Flex $gap="2%">
            <Button
              $bgColor={colors.gray03}
              width="49%"
              $hoverBgColor={colors.darkGray}
              onClick={handleCancel}
            >
              취소
            </Button>
            <Button
              $bgColor={
                isValid && isActiveAddBtn
                  ? colors.mainColor
                  : colors.lightGray02
              }
              width="49%"
              onClick={
                isValid && isActiveAddBtn
                  ? handleSubmit(createDutchpayData)
                  : () => {}
              }
              $cursorStyle={isValid && isActiveAddBtn ? "pointer" : "default"}
            >
              추가
            </Button>
          </Flex>
        </Box>
      </CenteredOverayContents>
    </>
  );
};
