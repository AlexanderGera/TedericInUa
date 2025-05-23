import Banner_pict from '../../assets/img/banners/banner.png';

import styles from './Banner.module.scss';


export default function Banner () {
    return (
        <div className={styles.banner__holder}>
            <img src={Banner_pict} alt="Banner"/>
        </div>
    );
}