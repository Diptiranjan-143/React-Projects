import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isAuth, setIsAuth }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsAuth(false);
        navigate("/", { replace: true });
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <span className="logo-icon">✓</span>
                    <span className="logo-text">TaskFlow</span>
                </div>

                <ul className="nav-menu">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                            onClick={(e) => {
                                if (!isAuth) {
                                    e.preventDefault();
                                }
                            }}
                        >
                            About
                        </NavLink>
                    </li>
                    {!isAuth && (
                        <li>
                            <NavLink
                                to="/login"
                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                            >
                                Login
                            </NavLink>
                        </li>
                    )}
                    {isAuth && (
                        <>
                            <li>
                                <NavLink
                                    to="/dashboard"
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                            <li>
                                <button onClick={handleLogout} className="nav-link logout-btn">
                                    Logout
                                </button>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
