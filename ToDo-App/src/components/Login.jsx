import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

function Login({ setIsAuth }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if (email.trim() && password.trim()) {
            setIsAuth(true);
            navigate("/dashboard", { replace: true });
        } else {
            alert("Please fill in all fields!");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-header">
                    <h1>Welcome to TaskFlow</h1>
                    <p>Manage your tasks efficiently</p>
                </div>

                <form className="login-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div className="password-input-wrapper">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                            />
                            <button
                                type="button"
                                className="toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="login-button">Login</button>
                </form>

                <div className="login-info">
                    <p>Demo Credentials:</p>
                    <p>Email: <strong>demo@example.com</strong></p>
                    <p>Password: <strong>demo123</strong></p>
                </div>

                <div className="new-user">
                    <p>New to TaskFlow? Create an account to get started!</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
