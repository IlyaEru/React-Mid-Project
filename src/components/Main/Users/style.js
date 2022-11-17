import styled from "styled-components";

export const StyledUsers = styled.section`
ul.users-list{
  list-style-type: none;
  display: grid;
  justify-content: center;
justify-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 30rem;
  grid-template-columns: 1fr auto;
  @media ((max-width: 768px)) {
    grid-template-columns: 1fr;   
  }
}
    @media ((max-width: 600px)) {
ul.users-list{
  width: 24rem;
  font-size: 0.8rem;
}}
    @media ((max-width: 450px)) {
ul.users-list{
  width: 20rem;
  font-size: 0.6rem;
}

       
  }
`