import styles from './NewEquipmentBlock.module.scss'
import {Link} from "react-router-dom";

export default function NewEquipmentBlock(props) {

    let {pictureName, altName, title, text, address, newClass} = props;


    return <section className={`section_border_top ${styles.newProductsIntro_section} ${newClass === "reverse" ? styles.reverse : ""}`}>
        <div className={styles.newProducts_pictureHolder}>
            <img src={pictureName} alt={altName}/>
        </div>
        <div className={styles.newProducts_textHolder}>
            <span className="item_titel">{title}</span>
            <span>{text}</span>
            <Link className="link_decoration" to={address}>
                Подробнее...
            </Link>
        </div>

    </section>

}