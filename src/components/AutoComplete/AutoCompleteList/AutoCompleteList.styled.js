import styled from 'styled-components';

const activeCss = ({ isItemActive }) =>
  isItemActive
    ? `
    background: linear-gradient(
      90deg,
      hsla(218, 100%, 42%, 0.6) 0%,
      hsla(0, 0%, 98%, 1) 200%
    );
    color: #fff;
    cursor: pointer;
    font-weight: 700;`
    : ``;

export const ListStyled = styled.ul`
  border: 1px solid hsla(218, 100%, 42%, 0.5);
  border-top-width: 0;
  list-style: none;
  max-height: 143px;
  overflow-y: auto;
  padding-left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  ::-webkit-scrollbar {
    width: 0.2rem;
    height: 0rem;
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: hsla(218, 100%, 42%, 1);
  }
`;

export const SpanStyled = styled.span`
  color: white;
  background: black;
`;

export const ItemStyled = styled.li`
  padding: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  :hover {
    background: linear-gradient(to left, #3a9903 0%, #0e0ecf 100%);
    color: #fff;
    cursor: pointer;
    font-weight: 700;
    ${SpanStyled} {
      color: black;
      background: white;
    }
  }
  :not(:last-of-type) {
    border-bottom: 1px solid #999;
  }
  ${activeCss}
`;
