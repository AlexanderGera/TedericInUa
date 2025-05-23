import styles from './LeftAsideColumn.module.scss';

export default function LeftAsideColumn ({children}) {
    return (
        <aside className={styles.aside}>
            {children}
        </aside>
    );
}