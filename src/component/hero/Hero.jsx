import styles from "./hero.module.css";

function Hero({ title, message }) {
    return (
        <section className={styles.heroContainer}>
            <div className={styles.text}>
                <h2>{title}</h2>
                <p>{message}</p>
            </div>
        </section>
    )
}

export default Hero