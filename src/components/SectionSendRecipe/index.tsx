import { Link } from "react-router-dom";
import styles from "./SectionSendRecipe.module.scss";
import { TitleSection } from "../Title";

type SendRecipeProps = {
  title: string;
  description: string;
};

export default function SectionSendRecipe({ description }: SendRecipeProps) {
  return (
    <div className={`${styles["send-recipe"]} text-center m-auto p-4`}>
      <div className={`${styles["content"]} h-full w-full flex p-2 items-center justify-center flex-col rounded-md`}>
        <TitleSection>Send your recipe</TitleSection>
        <p className="text-xl mt-10 mb-10">{description}</p>
        <Link className={'bg-indigo-800 p-5 rounded-lg'} to="/send-recipe">Send recipe</Link>
      </div>
    </div>
  );
}
