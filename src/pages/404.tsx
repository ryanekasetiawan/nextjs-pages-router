import styles from "@/styles/404.module.scss";

const Custom404 = () => {
    return (
        <div className={styles.error}>
            <img src="/not_found.png" alt="Not Found" className={styles.error__image}/>
            <div>Halaman tidak ditemukan</div>
        </div>
    )
}

export default Custom404