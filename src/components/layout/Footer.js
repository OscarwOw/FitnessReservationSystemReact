import styles from './Footer.module.css';

function Footer(){

    return(
        <div className={styles.container}>
            <div className={styles.column}>
                <h1>Section one</h1>
                <ul>
                    <li></li>
                    
                </ul>
            </div>
            <div className={styles.column}>
                <h1>section two</h1>
            </div>
            <div className={styles.column}>
            <h1>section three</h1>
            </div>
        </div>
        )

}
export default Footer