import styled from "styled-components";

export const StyledUserSearch = styled.div`
display: flex;
align-items: center;
margin: 1rem;
justify-content: center;
.user-search__input{
  width: 20rem;
display: flex;
align-items: center;
input{
  flex: 1;
  background: transparent;
  border: .4px solid ${props => props.theme.color.silver};
  border-radius: 5px;
  margin: 0 1rem;
  padding: 3px;
  height: 1.5rem;

}
}
.user-search__add-btn{
  height: 2rem;
  border: 2px solid ${props => props.theme.color.mainBlue};
  background-color: transparent;
      height: 1.5rem;
}
    @media ((max-width: 768px)) {
      label{
            font-size: 1.1rem;
      }
      font-size: 0.8rem;
   .user-search__input{
  width: auto;


}
  button{
    font-size: 0.8rem;
    padding: 6px 10px;
  }
       
  }
`