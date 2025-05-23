import styles from './LeftMenuColumn.module.scss';

import {EQUIPMENT_LIST} from "../../Data";

import {Link} from "react-router-dom";

export default function LeftMenuColumn() {


    return (
        <>
            {EQUIPMENT_LIST.map((insideListItems) => {
                return (
                    <>
                        <li className={styles.leftMenu__title}>{insideListItems.title}</li>
                        {insideListItems.items ? insideListItems.items.map((item) => {
                            return (

                                <Link className={styles.leftMenu__regularText} to={item.link} key={item.key}>
                                    {item.name}
                                </Link>

                            );
                        }) : []}
                    </>
                );
            })

            }

        </>
    );
}