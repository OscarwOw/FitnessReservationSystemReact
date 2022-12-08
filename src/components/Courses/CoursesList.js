import CourseItem from "./CourseItem";
import classes from "./CourseList.module.css";


function CoursesList(props) {
    return (
        <ul className={classes.content}>
            {props.items.map(item =>
                <CourseItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    length={item.length}
                    price={item.price} />)}
        </ul>
    );
}

export default CoursesList;