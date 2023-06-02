import styles from './Button.module.scss';

type ButtonProps = {
  btnTitle: string
}

export const Button = ({btnTitle} : ButtonProps) => {
  return <button className={styles['button']}>{btnTitle}</button>
}