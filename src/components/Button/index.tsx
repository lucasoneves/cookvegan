import styles from './Button.module.scss';

type ButtonProps = {
  btnTitle: string;
  classes: string
}

export const Button = ({btnTitle, classes} : ButtonProps) => {
  return <button className={`${styles["button"]} ${classes}`}>{btnTitle}</button>
}