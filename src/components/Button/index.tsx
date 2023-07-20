type ButtonProps = {
  btnTitle: string;
  classes: string
}

export const Button = ({btnTitle, classes} : ButtonProps) => {
  return <button className={`${classes}`}>{btnTitle}</button>
}