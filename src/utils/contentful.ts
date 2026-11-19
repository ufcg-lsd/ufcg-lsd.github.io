const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || "master";
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "";
const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE || "";
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

  if (json.errors) {
    throw new Error(JSON.stringify(json.errors, null, 2));
  }

  return json.data;
}

export interface IPensadouroPost {
  label: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

const decodeHtmlEntities = (value: string) =>
  value
    .replace(/&#x([0-9a-f]+);/gi, (_, code: string) =>
      String.fromCodePoint(parseInt(code, 16)),
    )
    .replace(/&#([0-9]+);/g, (_, code: string) =>
      String.fromCodePoint(parseInt(code, 10)),
    )
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&apos;/gi, "'");

const getXmlValue = (item: string, tag: string) => {
  const match = item.match(
    new RegExp(`<${tag}(?:\\s[^>]*)?>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?<\\/${tag}>`, "i"),
  );
  return (match?.[1] ?? "")
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .trim();
};

export async function getPensadouroPosts(limit = 2): Promise<IPensadouroPost[]> {
  const safeLimit = Math.max(0, Math.floor(limit));

  try {
    const response = await fetch("https://pensadourolsd.substack.com/feed", {
      headers: { "User-Agent": "Mozilla/5.0" },
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error(
        `Falha ao carregar o feed do Pensadouro LSD: ${response.status} ${response.statusText}`,
      );
      return [];
    }

    const xml = await response.text();
    const items = xml.match(/<item[\s\S]*?<\/item>/gi) ?? [];

    if (items.length === 0) {
      console.warn(
        "Feed do Pensadouro LSD retornou sem itens; usando fallback.",
      );
      return [];
    }

    return items
      .slice(0, safeLimit)
      .map((item) => {
      const title = decodeHtmlEntities(getXmlValue(item, "title")).trim();
      const descriptionXml = decodeHtmlEntities(getXmlValue(item, "description"));
      const description = decodeHtmlEntities(
        descriptionXml.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(),
      );
      const dateValue = getXmlValue(item, "pubDate");
      const parsedDate = dateValue ? new Date(dateValue) : null;
      const date =
        parsedDate && !Number.isNaN(parsedDate.getTime())
          ? parsedDate.toISOString()
          : "";
      const link = decodeHtmlEntities(getXmlValue(item, "link")).trim();

      return {
        label: "Post no Pensadouro LSD",
        title,
        description,
        date,
        link,
      };
      })
      .filter((post) => Boolean(post.title && post.link));
  } catch (error) {
    console.error("Não foi possível carregar as novidades do Pensadouro LSD:", error);
    return [];
  }
}
