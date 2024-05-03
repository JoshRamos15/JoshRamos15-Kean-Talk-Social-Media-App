import React from 'react';
import './Header.css'; // Import your header styles

function Header() {
    return (
        <header className="header">
            <img
                src="https://jobs.sciencecareers.org/_/jobseekers-frontend/image/c337deb2-9650-4477-925d-88cc9d5b078f"
                alt="Logo"
                className="logo"
            />
            <h1 className="title">Kean Talk</h1>
        </header>
    );
}

export default Header;