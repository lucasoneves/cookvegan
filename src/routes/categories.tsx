import { useParams } from "react-router-dom"
import { TitleSection } from "../components/Title";

export default function CategoriesPage() {
  const { category } = useParams();
  return <div className="container"><TitleSection>Categoria</TitleSection></div>
}