const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || "master";
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "";
const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE || "";
const CONTENTFUL_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/${ENVIRONMENT}`;

export async function getContent<T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  console.log(ACCESS_TOKEN)
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

  if (json.errors) {
    throw new Error(JSON.stringify(json.errors, null, 2));
  }

  return json.data;
}



// type ContentfulVariables = Record<string, unknown>;

// export class ContentfulClient {
//   private endpoint: string;
//   private accessToken: string;

//   constructor() {
//     const spaceId = process.env.CONTENTFUL_SPACE || "";
//     const environment = process.env.CONTENTFUL_ENVIRONMENT || "master";
    
//     this.accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || "";
//     this.endpoint = `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}`;

//     if (!spaceId || !this.accessToken) {
//       console.warn("ContentfulClient: Missing SPACE_ID or ACCESS_TOKEN in environment variables.");
//     }
//   }

//   /**
//    * Fetches data from the Contentful GraphQL API.
//    * @param query The GraphQL query string.
//    * @param variables Optional variables for the query (e.g., filters for your workingFields).
//    */
//   public async getContent<T>(
//     query: string,
//     variables?: ContentfulVariables
//   ): Promise<T> {
//     try {
//       const response = await fetch(this.endpoint, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${this.accessToken}`,
//         },
//         body: JSON.stringify({
//           query,
//           variables,
//         }),
//       });

//       const json = await response.json();

//       if (json.errors) {
//         // Logging the specific Contentful error can help with debugging complex reference queries
//         throw new Error(`Contentful GraphQL Error: ${JSON.stringify(json.errors, null, 2)}`);
//       }

//       return json.data as T;
//     } catch (error) {
//       console.error("ContentfulClient Fetch Error:", error);
//       throw error;
//     }
//   }
// }
