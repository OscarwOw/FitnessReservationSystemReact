import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationBar.module.css';

function NavigationBar() {
    return (
        <nav className={styles.container}>
            {/* burger menu */}
            <div className={styles.burgerMenuInput}>
                <input type="checkbox" aria-label="Toggle menu" />
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* logo */}
            <Link to="/" className={styles.logo}>
                <img src="https://wweb.dev/resources/navigation-generator/logo-placeholder.png" alt="My Awesome Website" />
            </Link>

            {/* menu items */}
            <div className={styles.menu}>
                <ul>
                    <li className={styles.menuItem}>
                        <Link to="/" className={styles.menuLink}>
                            Home
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link to="/courses" className={styles.menuLink}>
                            Courses
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link to="/calendar" className={styles.menuLink}>
                            Calendar
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link to="/about" className={styles.menuLink}>
                            About
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li className={styles.menuItem}>
                        <Link to="/register" className={styles.menuLink}>
                            Register
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link to="/login" className={styles.menuLink}>
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavigationBar;
