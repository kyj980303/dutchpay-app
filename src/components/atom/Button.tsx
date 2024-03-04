import styled from "styled-components";
import colors from "../../themes/colors";
import fontSizes from "../../themes/fontSizes";

interface StyleProps {
  $bgColor?: string;
  width?: string;
  $border?: string;
  $hoverBgColor?: string;
  $cursorStyle?: string;
}
const Button = styled.button<StyleProps>`
  background-color: ${(StyleProps) => StyleProps.$bgColor};
  width: ${(StyleProps) => StyleProps.width};
  height: 57px;
  color: ${colors.white};
  border-radius: 10px;
  border: ${(StyleProps) => StyleProps.$border || "none"};
  font-size: ${fontSizes.m};
  cursor: ${(StyleProps) => StyleProps.$cursorStyle || "pointer"};
  &:hover {
    transition: all 0.3s;
    background-color: ${(StyleProps) => StyleProps.$hoverBgColor};
  }
`;

export default Button;
