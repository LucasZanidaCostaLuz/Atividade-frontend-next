import styles from '../styles/Topics.module.css'
import Topic from './Topic'

export default function Topics(){
    return(
        <div className={styles.topics}>
            <Topic title = {"card 1"} content={"meu primeiro card"} />
            <Topic title = {"card 2"} content={"meu segundo card"} />
            <Topic title = {"card 3"} content={"meu terceiro card"} />
        </div>
    )
}