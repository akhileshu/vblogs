import type { Blog, Prisma, PrismaClient } from "@prisma/client";
import { BaseService } from "./../base-service";

import {
  AddBlogMetadataInput,
  BlogSearchQueryParameters,
  SaveBlogContentInput,
} from "@/shared/types/models/blog";
import { addBlogMetadata } from "./add-blog-metadata";
import { createBlog } from "./create-blog";
import { deleteBlog } from "./delete-blog";
import { getBlogById } from "./get-blog-by-id";
import { getBlogContentBySlug } from "./get-blog-content-by-slug";
import { getBlogSearchResults } from "./get-blog-search-results";
import { getAllBlogs } from "./get-blogs";
import { getBlogsByAuthorId } from "./get-blogs-by-author-id";
import { updateBlog } from "./update-blog";

import { SortKey } from "@/shared/lib/blog-sort";
import { BlogContent } from "../../../../generated/type-graphql";
import { saveBlogContent } from "./save-blog-content";

/* 
. Returning null or undefined
Context: This typically happens when trying to retrieve or update data that doesn't exist (e.g., retrieving a non-existent blog post by ID).
Standard: If the data cannot be found, return null or throw an error, depending on your use case.

Empty Lists (e.g., empty arrays)
Context: This occurs when querying a collection, but no results are found (e.g., when no blogs match the search criteria).
Standard: When no items are found, return an empty array ([]) rather than null or undefined
*/

interface BlogService {
  // Declare public methods that will be used by handlers
  createBlog(data: Prisma.BlogCreateInput): Promise<Blog>;
  getBlogById(id: string): Promise<Blog | null>;
  updateBlog(id: string, data: Prisma.BlogUpdateInput): Promise<Blog>;
  deleteBlog(id: string): Promise<Blog>;
  getAllBlogs(): Promise<Blog[]>;
  getBlogContentBySlug(slug: string): Promise<BlogContent | null | undefined>;
  getBlogSearchResults(params: BlogSearchQueryParameters): Promise<Blog[]>;
  getBlogsByAuthorId(
    authorId: string,
    filters: BlogSearchQueryParameters
  ): Promise<Blog[]>;
  addBlogMetadata(data: AddBlogMetadataInput): Promise<Blog>;
  saveBlogContent(data: SaveBlogContentInput): Promise<Blog>;
  
  // Private / Protected methods will be implemented in the service class
  // These methods will not be part of the public interface but are necessary for the class implementation.
}

export type BlogServiceReturnType<T extends keyof BlogService> = Awaited<
  ReturnType<BlogService[T]>
>;

export class BlogServiceImplementation
  extends BaseService
  implements BlogService
{
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  private getOrderBy(
    sortKey?: SortKey
  ): Prisma.BlogOrderByWithRelationInput | undefined {
    switch (sortKey) {
      case "popularity":
        return { views: "desc" };
      case "newest":
        return { createdAt: "desc" };
      case "oldest":
        return { createdAt: "asc" };
      case "shortestRead":
        return { readTimeInMinutes: "asc" };
      case "longestRead":
        return { readTimeInMinutes: "desc" };
      default:
        return undefined;
        throw new Error(`Unsupported sort key: ${sortKey}`);
    }
  }

  async createBlog(data: Prisma.BlogCreateInput) {
    await this.beforeAction("create", data);
    const result = await createBlog(this.prisma, data);
    await this.afterAction("create", result);
    return result;
  }

  async getBlogById(id: string) {
    await this.beforeAction("getById", id);
    const result = await getBlogById(this.prisma, id);
    await this.afterAction("getById", result);
    return result;
  }

  async updateBlog(id: string, data: Prisma.BlogUpdateInput) {
    await this.beforeAction("update", { id, data });
    const result = await updateBlog(this.prisma, id, data);
    await this.afterAction("update", result);
    return result;
  }

  async deleteBlog(id: string) {
    await this.beforeAction("delete", id);
    const {}=this.getLoggedInUser()
    const result = await deleteBlog(this.prisma, id);
    await this.afterAction("delete", result);
    return result;
  }

  async getAllBlogs() {
    await this.beforeAction("getAll", null);
    const result = await getAllBlogs(this.prisma);
    await this.afterAction("getAll", result);
    return result;
  }

  async getBlogContentBySlug(slug: string) {
    await this.beforeAction("getBlogContentBySlug", slug);
    const result = await getBlogContentBySlug(this.prisma, slug);
    await this.afterAction("getBlogContentBySlug", result);
    return result;
  }
  async getBlogSearchResults(params: BlogSearchQueryParameters) {
    const orderBy = this.getOrderBy(params.sortKey);
    const result = await getBlogSearchResults(this.prisma, {
      ...params,
      orderBy,
    });
    return result;
  }
  async getBlogsByAuthorId(
    authorId: string,
    filters: BlogSearchQueryParameters
  ) {
    const orderBy = this.getOrderBy(filters.sortKey);
    const result = await getBlogsByAuthorId(this.prisma, authorId, {
      ...filters,
      orderBy,
    });
    return result;
  }
  async addBlogMetadata(data: AddBlogMetadataInput) {
    const author = await this.getLoggedInAuthor();
    const result = await addBlogMetadata(this.prisma, data, author.id);
    return result;
  }
  async saveBlogContent(data: SaveBlogContentInput) {
    await this.getLoggedInAuthor();
    return await saveBlogContent(this.prisma, data);
  }

  protected async beforeAction(action: string, data: unknown) {
    super.beforeAction(action, data);
    // Custom logic specific to BlogService
  }

  protected async afterAction(action: string, result: unknown) {
    super.afterAction(action, result);
    // Custom logic specific to BlogService
  }
}
