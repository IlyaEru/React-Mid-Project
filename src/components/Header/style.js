import styled from "styled-components";

export const StyledHeader = styled.header`
      background-color: ${props => props.theme.bg.header};
  min-width: 100%; 
   display: flex;
  align-items: center;
  justify-content: center;
      .header__hero{
    font-family: rubik;
    color: ${props => props.theme.color.mainBlue};
    font-size: 3rem;
    font-weight: 600;

  }
    @media ((max-width: 768px)) {
       .header__hero{
        font-size: 2rem;
       }
       
  }
      @media ((max-width: 576px)) {
       .header__hero{
        font-size: 1.2rem;
       }
       
  }
`