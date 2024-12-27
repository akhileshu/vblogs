type Page = "blogRead" | "blogEdit" | "blogCreate"| "blogFillMetadata" | "blogSearchResults";

export function getUrl(
  page: Page,
  slug?: string,
  params?: URLSearchParams
): string {
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
      return `/blog/search-results?${params?.toString()}`;
    default:
      throw new Error(`Unknown page: ${page}`);
  }
}

