import { Button } from "../Button";
import styles from "./SearchBar.module.scss";

type SearchBarProps = {
  title: string;
};

export const SearchBar = ({ title }: SearchBarProps) => {
  return (
    <div className={styles["search-bar"]}>
      <form action="" className="flex gap-2 flex-wrap max-w-xl">
        <input type="search" placeholder={title} className="p-5 rounded-lg flex-1 text-black" />
        <Button btnTitle="Search" classes="p-5 rounded-lg text-white justify-center bg-blue-800" />
      </form>
    </div>
  );
};


// input {
//   font-size: inherit;
//   padding: $main-padding;
//   border-radius: $radius;
//   height: $input-height;
//   flex: 5;
// }