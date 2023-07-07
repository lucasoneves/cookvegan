import {createClient} from '@sanity/client'
const PROJECT_ID = "2z090rar";
const DATASET = "production";
const QUERY = encodeURIComponent('*[_type == "category"]');
const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

export async function getCategories() {
  try {
    const response = await fetch(URL)
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