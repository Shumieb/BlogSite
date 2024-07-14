import { Link } from "react-router-dom";
import styles from "./homeCategoriesList.module.css";

function HomeCategoriesList() {
    return (
        <section className={styles.categoriesList}>
            <p className={styles.category}><Link to="/category/nature">Nature</Link> </p>
            <p className={styles.category}><Link to="/category/travel">Travel</Link></p>
            <p className={styles.category}><Link to="/category/sports">Sports</Link></p>
            <p className={styles.category}><Link to="/category/beauty">Beauty</Link></p>
            <p className={styles.category}><Link to="/category/politics">Politics</Link></p>
        </section>
    )
}

export default HomeCategoriesList