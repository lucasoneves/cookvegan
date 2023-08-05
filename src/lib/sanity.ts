import {createClient} from '@sanity/client'
const PROJECT_ID = "2z090rar";
const DATASET = "production";
const QUERY = encodeURIComponent('*[_type == "category"]');
const QUERY_RECIPES = encodeURIComponent('*[_type == "recipe"]');
const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
const URL_RECIPES = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY_RECIPES}`;

export async function getCategories() {
  try {
    const response = await fetch(URL)
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error(error);
  }
}


export async function getRecipes() {
  try {
    const response = await fetch(URL_RECIPES)
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