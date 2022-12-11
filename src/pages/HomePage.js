import classes from './HomePage.module.css';
function HomePage() {

    return (
        <div className={classes.container}>
            <h1 className={classes.heading}>Welcome to our fitness center!</h1>
            <p>We are dedicated to providing a comfortable and supportive environment for individuals of all fitness levels to achieve their health and wellness goals. Our state-of-the-art facility offers a wide range of equipment and classes, including cardio machines, weight training equipment, group fitness classes, and personal training services.</p>
            <p>We also have a sauna, steam room, and hot tub for members to relax and unwind after a workout. Our team of professional and friendly staff are always available to assist you with any questions or concerns.</p>
            <p>We look forward to seeing you at the gym!</p>
        </div>
    );
}

export default HomePage;