import styles from './Header.module.scss';

import Logo from "../Logo/Logo";
import HeaderNavigationHolder from "../HeaderNavigationHolder/HeaderNavigationHolder";
import HeaderLink from "../HeaderLink/HeaderLink";
import HeaderContacts from "../HeaderContacts/HeaderContacts";
import SocialMediaIconsHolder from "../SocialMediaIconsHolder/SocialMediaIconsHolder";

export default function Header () {

    return (
        <header className={styles.header}>
            <div className={styles.header__logoHolder}>
                <Logo />
                <HeaderContacts />
                <SocialMediaIconsHolder />
            </div>
            <HeaderNavigationHolder>
                <HeaderLink path="/" linkName="Главная" key='about'/>
                <HeaderLink path="/about" linkName="О компании" key='about'/>
                <HeaderLink path="/equipment" linkName="Оборудование" key='equipment'/>
                <HeaderLink path="/articles" linkName="Статьй" key='articles'/>
                <HeaderLink path="/contacts" linkName="Оборудование" key='contacts'/>
            </HeaderNavigationHolder>
        </header>
    );
}