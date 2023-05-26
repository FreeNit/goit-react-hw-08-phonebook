import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p>Welcome, {user.email}</p>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
};
