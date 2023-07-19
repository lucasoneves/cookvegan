import { Link } from "react-router-dom";
import styles from "./SectionSendRecipe.module.scss";
import { TitleSection } from "../Title";

type SendRecipeProps = {
  title: string;
  description: string;
};

export default function SectionSendRecipe({ description }: SendRecipeProps) {
  return (
    <div className={`${styles["send-recipe"]} text-center m-auto`}>
      <div className={`${styles["content"]} h-full w-full flex items-center justify-center flex-col`}>
        <TitleSection>Send your recipe</TitleSection>
        <p className="text-xl mt-10 mb-10">{description}</p>
        <Link className={'bg-green-950 p-5 rounded-lg'} to="/send-recipe">Send recipe</Link>
      </div>
    </div>
  );
}
