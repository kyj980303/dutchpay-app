import styled from "styled-components";

export type BoxProps = {
  width?: string;
  height?: string;
  $minHeight?: string;
  display?: string;
  padding?: string;
  margin?: string;
  $marginTop?: string;
  $marginBottom?: string;
  $marginLeft?: string;
  $bgColor?: string;
  $borderBottom?: string;
};
const Box = styled.div<BoxProps>`
  width: ${(props) => props.width || undefined};
  height: ${(props) => props.height || undefined};
  display: ${(props) => props.display || undefined};
  padding: ${(props) => props.padding || undefined};
  margin: ${(props) => props.margin || undefined};
  margin-top: ${(props) => props.$marginTop || undefined};
  margin-bottom: ${(props) => props.$marginBottom || undefined};
  margin-left: ${(props) => props.$marginLeft || undefined};
  background-color: ${(props) => props.$bgColor || undefined};
  border-bottom: ${(props) => props.$borderBottom || undefined};
  @media (max-width: 1600px) {
    height: ${(props) => props.$minHeight || undefined};
  }
`;

export default Box;
