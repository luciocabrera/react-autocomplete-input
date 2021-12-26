import styled from 'styled-components';

export const AutoCompleteStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 300px;

  input {
    border: 1px solid hsla(218, 100%, 42%, 1);
    outline: none;
    padding: 0 0.5rem;
    width: calc(100% - 1rem);
    height: 40px;
    border-radius: 5px;
  }
`;
