import styled from "styled-components";

export const StyledFooter = styled.footer`
min-width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: .4rem;
margin: auto 0 .3rem;
.footer__divider{
  background: ${props => props.theme.bg.header};
  height: .1rem;
  width: 100%;
  margin-top: 1rem;
}
.footer__content{
  opacity: .8;
display: flex;
align-items: center;
gap: .4rem;

.footer__github-link{
color: ${props => props.theme.color.gitHub};
}}
`