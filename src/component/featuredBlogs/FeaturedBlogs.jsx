import BlogCard from "../blogCard/BlogCard";
import styles from "./featuresBlogs.module.css";

function FeaturedBlogs() {
    return (
        <section className={styles.featuredContainer}>
            <h2>Featured</h2>
            <span className={styles.hr}><hr /></span>
            <ul className={styles.featureList}>
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </ul>
        </section>
    )
}

export default FeaturedBlogs