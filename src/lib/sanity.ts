import {createClient} from '@sanity/client'
const PROJECT_ID = "2z090rar";
const DATASET = "production";
const QUERY = encodeURIComponent('*[_type == "category"]');

const getRecipesHomePageQuery = {
  query: encodeURIComponent('*[_type == "recipe"] | order(_createdAt desc)[0..2]'),  
}

const getRecipesPageQuery = {
  query: encodeURIComponent('*[_type == "recipe"] | order(_createdAt desc)'), 
}

const recipeDetailEndpoint = {
  query: encodeURIComponent(`*[_id == 'wonderful-veg-tahine'`), 
}

function urlToFecth(query: string) {
  return `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${query}`;
}

export async function getCategories() {
  try {
    const response = await fetch(urlToFecth(QUERY))
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error(error);
  }
}


export async function getRecipes() {
  try {
    const response = await fetch(urlToFecth(getRecipesPageQuery.query))
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error(error);
  }
}

export async function getRecentRecipes() {
  try {
    const response = await fetch(urlToFecth(getRecipesHomePageQuery.query))
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error(error);
  }
}

export async function getRecipeDetail() {
  try {
    const response = await fetch(urlToFecth(recipeDetailEndpoint.query))
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error(error);
  }
}

export const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
})