import styles from '../styles/Main.module.css'
import Imgs from './Img';
import Topics from "./Topics";

export default function Main(){
    return(
        <main className={styles.main}>
            <Topics></Topics>
            <Imgs></Imgs>
        </main>
    )
}
