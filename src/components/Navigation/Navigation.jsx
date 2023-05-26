import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav
      style={{
        display: 'flex',
        gap: 35,
      }}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
};
