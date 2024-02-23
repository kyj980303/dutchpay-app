import styled from "styled-components";
import colors from "../../themes/colors";
import fontSizes from "../../themes/fontSizes";
const Title = styled.p`
  color: ${colors.gray01};
  font-size: ${fontSizes.s};
  margin-bottom: 8px;
`;
const StyledInput = styled.input`
  height: 40px;
  margin-bottom: 28px;
  width: 97%;
  background-color: ${colors.lightGray01};
  border: none;
  border-bottom: 1px solid ${colors.mainColor};
  padding-left: 3%;
  &:last-child {
    margin-bottom: 0px;
  }
  @media (max-width: 1600px) {
    height: 38px;
    margin-bottom: 20px;
  }
`;

interface Props {
  title?: string;
  inputType?: string;
  placeholder?: string;
  onChange?: (event: any) => void;
}

export const Input = ({ title, inputType, placeholder, onChange }: Props) => {
  const handleOnChange = (event: any) => {
    if (onChange) onChange(event);
  };
  return (
    <>
      <Title>{title}</Title>
      <StyledInput
        type={inputType}
        placeholder={placeholder}
        onChange={handleOnChange}
      ></StyledInput>
    </>
  );
};
