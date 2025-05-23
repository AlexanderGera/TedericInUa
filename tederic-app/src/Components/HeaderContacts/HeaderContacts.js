import styles from './HeaderContacts.module.scss';

export default function HeaderContacts () {
    return (
        <div className={styles.header__contactsHolder}>
            <span className={styles.header__contactsText}>Тел: +38 <span className={styles.redText}>(057)</span> 750-20-70</span>
            <span className={styles.header__contactsText}>760-50-80</span>
            <span className={styles.header__contactsText}>e-mail: info<span className={styles.redText}>@</span>tederic.com.ua</span>
        </div>
    );
}