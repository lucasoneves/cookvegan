import { RecipeList } from "../components/RecipeList";
import { TitleSection } from "../components/Title";

export default function RecipesPage() {
  return (
    <div className="container">
      <TitleSection>Recipes</TitleSection>
      <RecipeList fullList={true} titleList="" />
    </div>
  );
}
