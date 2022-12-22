import classes from './HomePage.module.css';
function AboutPage() {

    return (
        <div className={classes.container}>
            <h1 className={classes.heading}>About</h1>
            <h2 >Welcome to my project!</h2>
            <p>
                My name is Adam Belos and I am the creator of this project. I started
                this project as a hobby to learn more about web development and to
                challenge myself to create something from scratch. While I am still
                learning and this project is far from perfect, I am excited to share my
                progress and what I have learned along the way.
            </p>
            <p>
                This project was built using dot net web development and a PostgreSQL
                database. I also used an AI tool to generate some of the text on this
                site. Please note that this project is for learning purposes only and is
                not intended for any commercial use. I hope you enjoy exploring my
                project as much as I have enjoyed creating it.
            </p>
        </div>
    );
}

export default AboutPage;