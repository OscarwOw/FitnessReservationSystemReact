import { Link } from "react-router-dom";

import classes from './NavigationBar.module.css';



function NavigationBar() {

    return (
        <header className={classes.header} >
            <h1 className={classes.logo}><a href="#">Flexbox</a></h1>
            <ul className={classes.navbar}>
                <li>
                    <Link to='/'>Home Page</Link>
                </li>
                <li>
                    <Link to='/courses'>Courses</Link>
                </li>
                <li>
                    <Link to='/calendar'>Calendar</Link>
                </li>

                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </header> 
    );


}

export default NavigationBar;



