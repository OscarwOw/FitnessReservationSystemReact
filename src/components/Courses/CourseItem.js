import Card from '../ui/Card';
import classes from './CourseItem.module.css';

import { Link } from "react-router-dom";

function CourseItem(props) {
    function getNavigationLink(id) {
        return '/courses/'+id
    }


    return (
        
        <li>
            <Link to={getNavigationLink(props.id)} className={classes.noDecoration}>
                <Card>
                    <div className={classes.cardContent}>
                        <h2 className={classes.heading}>{props.name}</h2>
                        <p>{props.description}</p>
                        <p>Time: {props.length} minutes</p>
                        <p>Price: {props.price} kc</p>
                    </div>
                </Card>
            </Link>
        </li>
    );
}

export default CourseItem;