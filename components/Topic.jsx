import styles from '../styles/Topic.module.css'

export default function Topic ({title, content}){
    return(
        <div className={styles.topic}>
            <h1> {title} </h1>
            <p> {content} </p>
        </div>
    )
}