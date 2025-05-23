import styles from 'Footer.module.scss';
import HeaderNavigationHolder from "../HeaderNavigationHolder/HeaderNavigationHolder";
import HeaderLink from "../HeaderLink/HeaderLink";

export default function Footer () {
    return (
        <footer className={styles.footer}>
            <HeaderNavigationHolder>
                <HeaderLink path="/" linkName="Главная" key='about'/>
                <HeaderLink path="/about" linkName="О компании" key='about'/>
                <HeaderLink path="/equipment" linkName="Оборудование" key='equipment'/>
                <HeaderLink path="/articles" linkName="Статьй" key='articles'/>
                <HeaderLink path="/contacts" linkName="Оборудование" key='contacts'/>
            </HeaderNavigationHolder>
        </footer>
    );
}