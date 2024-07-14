import BlogCard from "../blogCard/BlogCard";
import styles from "./latestBlogs.module.css";

function LatestBlogs() {
    return (
        <section className={styles.latestContainer}>
            <h2>Latest</h2>
            <span className={styles.hr}><hr /></span>
            <ul className={styles.latestList}>
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </ul>
        </section>
    )
}

export default LatestBlogs