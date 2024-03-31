import { useEffect, useState } from "react";
import { InputTags } from "react-bootstrap-tagsinput";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { groupMemberState } from "../recoil/createDuchpayForm/atoms";
import colors from "../themes/colors";
import fontSizes from "../themes/fontSizes";
import "bootstrap/dist/css/bootstrap.min.css";

const Title = styled.p`
  color: ${colors.gray01};
  font-size: ${fontSizes.s};
  margin-bottom: 8px;
`;

const InputDiv = styled.div`
  margin-bottom: 20px;
  @media (max-width: 1600px) {
    margin-bottom: 15px;
  }
  .form-control {
    background-color: ${colors.lightGray01};
    border-bottom: 1px solid ${colors.mainColor};
    border-radius: 0px;
    border-top: none;
    border-left: none;
    border-right: none;
    input:focus {
      outline: none;
    }
  }
  .flex-fill {
    background-color: ${colors.lightGray01};
  }
  .badge {
    font-weight: normal;
    border-radius: 5px;
    padding-top: 6px;
  }
  .bg-transparent {
    margin-left: 3px;
  }
`;

interface Props {
  setIsActiveAddBtn?: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AddMembers = ({ setIsActiveAddBtn }: Props) => {
  const [groupMembers, setGroupMembers] = useRecoilState(groupMemberState);

  const handleTagsChange = (tags: any) => {
    setGroupMembers(tags.values);
  };

  useEffect(() => {
    if (setIsActiveAddBtn) {
      if (groupMembers.length > 0) {
        setIsActiveAddBtn(true);
      } else {
        setIsActiveAddBtn(false);
      }
    }
  }, [groupMembers]);

  return (
    <InputDiv>
      <Title>참여한 인원</Title>
      <InputTags
        onTags={handleTagsChange}
        placeholder="참여한 인원을 입력해 주세요."
        data-testid="input-member-names"
      />
    </InputDiv>
  );
};
