import styled from "styled-components";

export const StyledAppViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.bg.default};
min-height: 100%;
`