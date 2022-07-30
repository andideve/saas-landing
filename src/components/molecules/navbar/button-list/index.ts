import styled from '@emotion/styled';

const ButtonList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  li:not(:first-of-type) {
    margin-left: 2rem;
  }
`;

export { ButtonList };
export default ButtonList;
