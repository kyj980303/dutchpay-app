import { useEffect, useState } from "react";
import { InputTags } from "react-bootstrap-tagsinput";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { groupMemberState } from "../recoil/createDuchpayForm/atoms";
import colors from "../themes/colors";
import fontSizes from "../themes/fontSizes";

const Title = styled.p`
  color: ${colors.gray01};
  font-size: ${fontSizes.s};
  margin-bottom: 8px;
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
    if (groupMembers.length > 0 && setIsActiveAddBtn) setIsActiveAddBtn(true);
  }, [groupMembers]);

  return (
    <>
      <Title>참여한 인원</Title>
      <InputTags
        onTags={handleTagsChange}
        placeholder="참여한 인원을 입력해 주세요."
        data-testid="input-member-names"
      />
    </>
  );
};
