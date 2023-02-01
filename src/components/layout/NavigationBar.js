import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationBar.module.css';
import handleLinkClick from "../Engine/handleLinkClick";
import { useContext } from 'react';
import loginContext from '../../store/LoginContext';
import { useEffect } from 'react';


function NavigationBar() {
    const checkBoxRef = React.createRef();
    const loginCtx = useContext(loginContext);
    const user = loginCtx.LogedIn();
    const [isClicked,setIsClicked] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [menuClass,setMenuClass] = useState("visiblePC")
    const [listClass,setlistClass] = useState("menu")
    const [listvisible,setlistvisible] = useState("visible")
    const [burgervisible,setburgervisible] = useState("hidden")
    const [animation,setanimation] = useState("");

    const handleResize = () => {
        if (window.innerWidth < 760) {
            setIsMobile(true)
            if(isClicked){
               setMenuClass("visibleMb");
               setlistClass("menuMb");
               setlistvisible("visible");
               setburgervisible("visible");
               console.log("working");
            }
            else{
                setMenuClass("visibleMb");
                setlistClass("menuMb");
                setlistvisible("hidden");
                setburgervisible("visible");
            }
        } else {
            setIsMobile(false)
            setMenuClass("visiblePC");
            setlistClass("menu");
            setburgervisible("hidden");
            setlistvisible("visible");
        }
      }

    function handleBurgerMenuClick() {
        //const menuStyles = window.getComputedStyle(checkBoxRef);
        setIsClicked(!isClicked);
        setlistvisible(isClicked?"hidden":"visible");
        setanimation(isClicked?"animationback":"animation");

        console.log(menuClass);
    }


    async function handleLogoutClick(event) {
        event.preventDefault();
        //e.preventDefault(); // prevent default action of the click event
        window.localStorage.removeItem('username');
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('refreshToken');
        alert('Loged out');
        loginCtx.logout();


    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)
      })


    return (
        <nav className={`${styles.container} ${styles[menuClass]} ${styles[animation]}`}>
            

            {/* menu items */}
            
                <ul className={`${styles.menu} ${styles[listClass]} ${styles[listvisible]}`}>
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
                    <li className={styles.menuItem}>
                        <Link to="/priceList" className={styles.menuLink} onClick={handleLinkClick}>
                            Price List
                        </Link>

                    </li>
                    </ul>
                    <ul className={`${styles.menu} ${styles[listClass]} ${styles[listvisible]}`}>
                    {!user && (
                        <>
                                <li className={styles.menuItem}>
                                <Link to="/login" className={`${styles.menuLink} ${styles.loginLink}`} >
                                        Sign in
                                    </Link>
                                </li>
                            <li className={styles.menuItem}>
                                <Link to="/register" className={styles.menuLink} >
                                    Sign up
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

                {/* burger menu */}
                <ul className={`${styles.menu} ${styles[listClass]} ${styles[burgervisible]}`}>
                    <li>
                        <div className={styles.burgerMenuInput}>
                            <input type="checkbox" className={styles.burgerMenu} aria-label="Toggle menu" ref={checkBoxRef} onChange={handleBurgerMenuClick} />
                            <div className={styles.burgerBar}></div>
                            <div className={styles.burgerBar}></div>
                            <div className={styles.burgerBar}></div>
                        </div>
                    </li>
                </ul>

        </nav>
    );
}

export default NavigationBar;
