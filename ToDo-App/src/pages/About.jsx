import "./About.css";

function About() {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>About TaskFlow</h1>
                <p className="about-subtitle">Simplifying Task Management for Everyone</p>
            </div>

            <div className="about-content">
                <section className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        TaskFlow is built with a simple mission: to help people organize their daily tasks,
                        increase productivity, and achieve their goals with ease. We believe that effective
                        task management is key to personal and professional success.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Our Vision</h2>
                    <p>
                        We envision a world where everyone has access to powerful, yet simple tools for
                        managing their tasks and staying organized. We're committed to continuous improvement
                        and innovation to meet the evolving needs of our users.
                    </p>
                </section>

                <section className="about-section">
                    <h2>What We Offer</h2>
                    <div className="offer-list">
                        <div className="offer-item">
                            <span className="offer-icon">✨</span>
                            <div>
                                <h3>Clean Interface</h3>
                                <p>Intuitive design that anyone can use without a learning curve</p>
                            </div>
                        </div>
                        <div className="offer-item">
                            <span className="offer-icon">🔒</span>
                            <div>
                                <h3>Secure</h3>
                                <p>Your data is protected with secure authentication and storage</p>
                            </div>
                        </div>
                        <div className="offer-item">
                            <span className="offer-icon">⚡</span>
                            <div>
                                <h3>Fast & Responsive</h3>
                                <p>Lightning-fast performance optimized for all devices</p>
                            </div>
                        </div>
                        <div className="offer-item">
                            <span className="offer-icon">🎨</span>
                            <div>
                                <h3>Modern Design</h3>
                                <p>Beautiful UI with smooth animations and transitions</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-section">
                    <h2>Our Story</h2>
                    <p>
                        TaskFlow was created by developers who understand the challenges of task management.
                        We spent months researching user needs and gathering feedback to build the perfect
                        todo application. Today, we're proud to offer a solution that thousands of people
                        use every day to stay organized and productive.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Key Features</h2>
                    <div className="features-table">
                        <div className="feature-row">
                            <span className="feature-label">Create & Edit Tasks</span>
                            <span className="feature-status">✓</span>
                        </div>
                        <div className="feature-row">
                            <span className="feature-label">Mark Tasks as Complete</span>
                            <span className="feature-status">✓</span>
                        </div>
                        <div className="feature-row">
                            <span className="feature-label">Search Functionality</span>
                            <span className="feature-status">✓</span>
                        </div>
                        <div className="feature-row">
                            <span className="feature-label">Auto-Save to LocalStorage</span>
                            <span className="feature-status">✓</span>
                        </div>
                        <div className="feature-row">
                            <span className="feature-label">Secure Authentication</span>
                            <span className="feature-status">✓</span>
                        </div>
                        <div className="feature-row">
                            <span className="feature-label">Responsive Design</span>
                            <span className="feature-status">✓</span>
                        </div>
                    </div>
                </section>

                <section className="about-section">
                    <h2>Support Us</h2>
                    <p>
                        If you enjoy using TaskFlow, please consider sharing it with your friends and family.
                        Your feedback and suggestions help us improve the application every day.
                    </p>
                    <div className="support-buttons">
                        <button className="support-btn">Star on GitHub</button>
                        <button className="support-btn">Send Feedback</button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;
