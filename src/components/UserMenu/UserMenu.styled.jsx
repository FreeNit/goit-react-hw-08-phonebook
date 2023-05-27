import styled from 'styled-components';

export const UserDataWrapper = styled.div`
  display: inline-flex;
  gap: 15px;
  align-items: center;

  .logout {
    padding: 5px 10px;
    cursor: pointer;
    text-transform: uppercase;
    border: 2px solid #3c73ff;
    background-color: #3c73ff;
    border-radius: 10px;
    color: #fff;
    transition: 0.3s;

    &:hover {
      box-shadow: 3px 3px #99bdff;
      transition: 0.3s;
    }
  }
`;
