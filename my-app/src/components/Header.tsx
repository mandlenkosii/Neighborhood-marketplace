import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';

export function Header() {
  const { user, logOut } = useAuth();

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <span className="logo-mark">⛭</span>
          We-share
        </Link>
        <nav className="nav">
          <Link to="/">Browse</Link>
          {user && <Link to="/bookings">My bookings</Link>}
          {user ? (
            <span className="user-chip">
              {user.name}
              <button className="link-btn" onClick={logOut}>
                Log out
              </button>
            </span>
          ) : (
            <Link to="/auth" className="cta">
              Log in / Sign up
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
