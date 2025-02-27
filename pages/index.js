import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}