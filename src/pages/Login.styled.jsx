import styled from 'styled-components';

export const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  gap: 35px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    input {
      padding: 3px 5px;
      font-size: 16px;
    }
  }
  .loginBtn {
    padding: 7px 10px;
    cursor: pointer;
    text-transform: uppercase;
    border: 2px solid #024d15;
    background-color: #024d15;
    border-radius: 5px;
    color: #fff;
    transition: 0.3s;

    &:hover {
      box-shadow: 3px 3px #7bfa9b;
      transition: 0.3s;
    }
    &:active {
      background-color: #3e8e41;
      box-shadow: 0 5px #666;
      transform: translateY(4px);
    }
  }
`;
