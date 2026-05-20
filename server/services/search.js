import { search } from "duck-duck-scrape";

export const webSearch = async (query) => {
  try {
    const results = await search(query);

    return results.results
      .slice(0, 5)
      .map((r) => `${r.title}: ${r.description}`)
      .join("\\n");

  } catch (error) {
    console.log(error);

    return "";
  }
};