import { Button } from "../Button";
import styles from "./SearchBar.module.scss";

type SearchBarProps = {
  title: string;
};

export const SearchBar = ({ title }: SearchBarProps) => {
  return (
    <div className={styles["search-bar"]}>
      <form action="" className={styles['form']}>
        <input type="search" placeholder={title} />
        <Button btnTitle="Search" classes={styles['button']} />
      </form>
    </div>
  );
};
