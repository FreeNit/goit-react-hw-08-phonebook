import styled from 'styled-components';

export const ContactListSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FilterWrapper = styled.div`
  label {
    font-size: 18px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    margin-bottom: 40px;

    input {
      padding: 3px 5px;
      font-size: 16px;
    }
  }
`;

export const ContactsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 25px;

    .deleteContactBtn {
      padding: 7px 10px;
      cursor: pointer;
      text-transform: uppercase;
      border: 2px solid #b80404;
      background-color: #b80404;
      border-radius: 5px;
      color: #fff;
      transition: 0.3s;

      &:hover {
        box-shadow: 1px 1px #c79494;
        transition: 0.3s;
      }
      &:active {
        background-color: #850404;
        box-shadow: 0 3px #3d0000;
        transform: translateY(4px);
      }
    }
  }
`;
