import styles from './LeftAsideTitleBlock.module.scss';

export default function LeftAsideTitleBlock (props) {
    return (
      <div className={styles.aside_titleBlock}>
          {props.text}
      </div>
    );

}