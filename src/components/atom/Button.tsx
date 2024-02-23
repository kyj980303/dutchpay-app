import styled from "styled-components";
import colors from "../../themes/colors";
import fontSizes from "../../themes/fontSizes";

interface StyleProps {
  $bgColor?: string;
  width?: string;
  $border?: string;
}
const Button = styled.button<StyleProps>`
  background-color: ${(StyleProps) => StyleProps.$bgColor};
  width: ${(StyleProps) => StyleProps.width};
  height: 57px;
  color: ${colors.white};
  border-radius: 10px;
  border: ${(StyleProps) => StyleProps.$border || "none"};
  font-size: ${fontSizes.m};
`;

export default Button;
