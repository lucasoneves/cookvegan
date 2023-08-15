import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "../src/assets/css/index.scss";
import Home from './Home';
import BaseLayout from "./routes/root";
import SendRecipePage from "./routes/SendRecipe";
import ContactPage from "./routes/contact";
import LoginPage from "./routes/login";
import RecipesPage from "./routes/recipes";
import RecipeDetail from './routes/recipeDetail';
import CategoriesPage from "./routes/categories";

const router = createBrowserRouter([
  {
    path: "",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/recipes",
        element: <RecipesPage />,
      },
      {
        path: "/recipe/:id",
        element: <RecipeDetail />,
      },
      {
        path: "/send-recipe",
        element: <SendRecipePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ]
  },
  {
    path: '/categories',
    element: <BaseLayout />,
    children: [
      {
        path: "/categories/:category",
        element: <CategoriesPage />,
      }
    ]
  }
  
]);



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);