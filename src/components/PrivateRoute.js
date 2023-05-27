import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';
/*
  -> В інакшому випадку рендерити Redirect на redirect to
  -> Якщо маршрут приватний і користувач залогінений, тоді рендерити компонент
 */

// 1. Має повторяти API Route
// 2. Має рендерити Route
export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return isLoggedIn ? children : <Navigate to="/login" />;
}
