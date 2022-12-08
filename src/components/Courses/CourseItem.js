import Card from '../ui/Card';
import classes from './CourseItem.module.css';

function CourseItem(props) {


    return (
        
        <li>
            <Card>
                <div classname={classes.cardContent}>
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                    <p>{props.length}</p>
                    <p>{props.price}</p>
                </div>
                <div classname={classes.btn}>
                    <button >Checks Lectures</button>
                </div>
            </Card>
        </li>
    );
}

export default CourseItem;