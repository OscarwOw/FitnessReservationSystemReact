
import classes from './Layout.module.css';
import NavigationBar from './NavigationBar';
import Footer from './Footer';


function Layout(props) {
    return <div className={classes.wrap}>
        <NavigationBar />
        
        <main className={classes.main}>
            {props.children}
            
        </main>
        <Footer/>
    </div>
}

export default Layout;