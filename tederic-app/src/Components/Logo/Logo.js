
import styles from './Logo.module.scss';
export default function Logo () {
    return (
        <img className={styles.logoImg} src="/img/logo.png" alt="Tederic in Ukraine" />
    );
}