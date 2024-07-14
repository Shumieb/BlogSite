import styles from "./blogCard.module.css";
import { Link } from "react-router-dom";

function BlogCard() {
    return (
        <li className={styles.mainCard}>
            <img className={styles.cardImg} src="https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="blog picture" />
            <p className={styles.cardHeading}>Lorem, ipsum dolor sit amet.</p>
            <p className={styles.cardBody}>Lorem, ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur. </p>
            <div className={styles.cardFooter}>
                <p className={styles.italic}>Category: Travel</p>
                <Link to='./blog/542'><button className={styles.cardBtn}>Read</button></Link>
            </div>
        </li>
    )
}

export default BlogCard