import styles from './Footer.module.css';
import {FaYoutube, FaTwitter, FaFacebook, } from 'react-icons/fa'

function Footer(){

    return(
        <div className={styles.container}>
            <div className={styles.column}>
                <h2>Contact</h2>
                <p>17. listopadu 1790/5</p>
                <p>oscarwOw210@gmail.com</p>
                
                
            </div>
            <div className={styles.column}>
            <ul className={styles.social}>
                    <li><FaYoutube size={'3em'}/></li>
                    <li><FaTwitter size={'3em'}/></li>
                    <li><FaFacebook size={'3em'}/></li>
                    
                    
                </ul>
            </div>
        </div>
        )

}
export default Footer