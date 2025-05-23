import styles from './SocialMediaIconsHolder.module.scss';

import EmailIcon from '../../assets/img/icons/email_icon.jpg';
import HomeIcon from '../../assets/img/icons/home_icon.jpg';

export default function SocialMediaIconsHolder() {
    return (
        <div className={styles.header__socialMediaIconHolder}>
            <a href="#"><img src={EmailIcon} alt="E-mail"/></a>
            <a href="#"><img src={HomeIcon} alt="Home"/></a>
        </div>
    );
}