import styled from 'styled-components';

export const Container = styled.div`
padding-left: 40px;
padding-right: 40px;
`

export const List = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
  padding: 0;
`;

export const Button = styled.button`
  padding: 8px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  &:hover,
  :focus {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); 
    border-color: lightblue;
  }
  &:hover,
  &:focus {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); 
    outline: none;
    &:hover{
      background-color: lightblue;
    }
  }
`;
