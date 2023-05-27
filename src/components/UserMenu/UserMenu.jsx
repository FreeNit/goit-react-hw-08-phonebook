import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import { UserDataWrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <UserDataWrapper>
      <p>
        Welcome, <b>{user.email}</b>
      </p>
      <button
        className="logout"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </button>
    </UserDataWrapper>
  );
};
