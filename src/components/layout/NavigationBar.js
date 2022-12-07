import { Link } from "react-router-dom";



function NavigationBar() {

    return (
        <header>
            <div>
                Project</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home Page</Link>
                    </li>
                    <li>
                        <Link to='/courses'>Courses</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );


}

export default NavigationBar;