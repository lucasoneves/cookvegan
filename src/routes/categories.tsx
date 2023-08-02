import { useParams } from "react-router-dom"

export default function CategoriesPage() {
  const { category } = useParams();
  return <h2>Categories Page: {category}</h2>
}