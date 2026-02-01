const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || "master";
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN || "";
const SPACE_ID = process.env.CONTENTFUL_SPACE || "";
const CONTENTFUL_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/${ENVIRONMENT}`;

export async function getContent<T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  const response = await fetch(CONTENTFUL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },

    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await response.json();
  console.log(json.data.homePostCollection)

  if (json.errors) {
    throw new Error(JSON.stringify(json.errors, null, 2));
  }

  return json.data;
}


