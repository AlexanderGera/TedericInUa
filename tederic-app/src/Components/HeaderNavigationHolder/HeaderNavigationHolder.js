import styles from './HeaderNavigationHolder.module.scss';

export default function HeaderNavigationHolder({children}) {


    return (
        <nav className={styles.header__MenuHolder}>
            {children}
        </nav>

    );
}