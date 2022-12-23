import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationBar.module.css';
import handleLinkClick from "../Engine/handleLinkClick";
import handleLogoutClick from "../Engine/handleLogoutClick";
import { useContext } from 'react';
import loginContext from '../../store/LoginContext';





function handleBurgerMenuClick() {
    const menuStyles = window.getComputedStyle(checkBoxRef);
    console.log(menuStyles);
}



function NavigationBar() {
    const checkBoxRef = React.createRef();
    const loginCtx = useContext(loginContext);
    const user = loginCtx.LogedIn();

    return (
        <nav className={styles.container}>
            {/* burger menu */}
            <div className={styles.burgerMenuInput}>
                <input type="checkbox" className={styles.burgerMenu} aria-label="Toggle menu" ref={checkBoxRef} onChange={handleBurgerMenuClick} />
                <div className={styles.burgerBar}></div>
                <div className={styles.burgerBar}></div>
                <div className={styles.burgerBar}></div>
            </div>
            {console.log(new Date)}
            {/* logo */}
            <Link to="/" className={styles.logo}>
                <img src="https://wweb.dev/resources/navigation-generator/logo-placeholder.png" alt="My Awesome Website" />
            </Link>

            {/* menu items */}
            <div className={styles.menu}>
                <ul>
                    <li className={styles.menuItem}>
                        <Link to="/" className={styles.menuLink} onClick={handleLinkClick}>
                            Home
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link to="/courses" className={styles.menuLink} onClick={handleLinkClick}>
                            Courses
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link to="/calendar" className={styles.menuLink} onClick={handleLinkClick}>
                            Calendar
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link to="/about" className={styles.menuLink} onClick={handleLinkClick}>
                            About
                        </Link>
                    </li>
                </ul>
                <ul>
                    {!user && (
                        <>
                                <li className={styles.menuItem}>
                                <Link to="/login" className={`${styles.menuLink} ${styles.loginLink}`} >
                                        Login
                                    </Link>
                                </li>
                            <li className={styles.menuItem}>
                                <Link to="/register" className={styles.menuLink} >
                                    Register
                                </Link>
                            </li>                            
                        </>
                    )}
                    {user && (
                        <>
                            <li className={styles.menuItem}>
                                <Link to="/profile" className={styles.menuLink}>
                                    { user}
                                </Link>
                            </li>
                            <li className={styles.menuItem}>
                                <Link className={styles.menuLink} onClick={handleLogoutClick}>
                                    Logout
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default NavigationBar;
