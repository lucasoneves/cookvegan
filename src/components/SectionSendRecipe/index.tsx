import { Link } from "react-router-dom"

type SendRecipeProps = {
  title: string,
  description: string,
}

export default function SectionSendRecipe({title, description}: SendRecipeProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to="/send-recipe">Send recipe</Link>
    </div>
  )
}