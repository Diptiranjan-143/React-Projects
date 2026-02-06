import { Link } from "react-router-dom";
import "./Home.css";

function Home({ isAuth }) {
    return (
        <div className="home-container">
            <div className="hero-section">
                <h1 className="hero-title">✨ Welcome to TaskFlow</h1>
                <p className="hero-subtitle">Your Ultimate Todo Management Application</p>
                <p className="hero-description">
                    Stay organized, increase productivity, and achieve your goals with our powerful todo management system.
                </p>
            </div>

            <div className="features-section">
                <h2>🚀 Features</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">📝</div>
                        <h3>Easy Task Creation</h3>
                        <p>Create, edit, and manage your tasks effortlessly with a simple interface.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">✅</div>
                        <h3>Track Progress</h3>
                        <p>Mark tasks as complete and keep track of your accomplishments.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🔍</div>
                        <h3>Smart Search</h3>
                        <p>Find your tasks instantly with our powerful search functionality.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💾</div>
                        <h3>Auto-Save</h3>
                        <p>Your tasks are automatically saved and synced in real-time.</p>
                    </div>
                </div>
            </div>

            <div className="benefits-section">
                <h2>💡 Why Choose TaskFlow?</h2>
                <ul className="benefits-list">
                    <li>✓ Simple and intuitive user interface</li>
                    <li>✓ Secure login authentication</li>
                    <li>✓ Real-time task synchronization</li>
                    <li>✓ Edit and update tasks anytime</li>
                    <li>✓ Clean and modern design</li>
                    <li>✓ Fast and responsive performance</li>
                </ul>
            </div>

            <div className="cta-section">
                {!isAuth ? (
                    <>
                        <h2>Ready to boost your productivity?</h2>
                        <p>Join thousands of users who are already managing their tasks efficiently.</p>
                        <Link to="/login" className="cta-button">Get Started Now 🚀</Link>
                    </>
                ) : (
                    <>
                        <h2>Welcome back! 👋</h2>
                        <p>Head to your dashboard to manage your tasks.</p>
                        <Link to="/dashboard" className="cta-button">Go to Dashboard</Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default Home;
