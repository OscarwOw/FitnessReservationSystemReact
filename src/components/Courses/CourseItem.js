import Card from '../ui/Card';
import classes from './CourseItem.module.css';

import { Link } from "react-router-dom";

function CourseItem(props) {
    function getNavigationLink(id) {
        return '/courses/'+id
    }


    return (
        
        <li>
            <Card>
                <div className={classes.cardContent}>
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                    <p>{props.length}</p>
                    <p>{props.price}</p>
                </div>
                <div className={classes.btn}>
                    <Link to={getNavigationLink(props.id)}>
                        <button >Checks Lectures</button>
                    </Link>
                </div>
            </Card>
        </li>
    );
}

export default CourseItem;