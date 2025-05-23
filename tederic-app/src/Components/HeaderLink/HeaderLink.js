import { Link } from "react-router-dom";

import styles from './HeaderLink.module.scss'

export default function HeaderLink(props) {
    let {linkName, path, key} = props;
    return (
        <Link className={styles.header__MenuLink} to={path} key={key}>
            {linkName}
        </Link>
    );
}