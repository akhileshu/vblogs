type Page =
  | "blogRead"
  | "blogEdit"
  | "blogCreate"
  | "blogFillMetadata"
  | "blogSearchResults"
  | "authorDashboard"
  | "userProfile";

export function getUrl(
  page: Page,
  slug?: string,
  params?: string | URLSearchParams
): string {
  const query = params instanceof URLSearchParams ? params.toString() : params;
  switch (page) {
    case "blogRead":
      return `/blog/read/${slug}`;
    case "blogEdit":
      return `/blog/edit/${slug}`;
    case "blogCreate":
      return `/blog/create/${slug}`;
    case "blogFillMetadata":
      return "/blog/create/fill-metadata";
    case "blogSearchResults":
      return `/blog/search-results?${query}`;
    case "authorDashboard":
      return `/dashboard?${query}`;
    case "userProfile":
      return `/profile`;
    default:
      throw new Error(`Unknown page: ${page}`);
  }
}

