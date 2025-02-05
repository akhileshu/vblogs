import type { Prisma, PrismaClient ,BlogPlaylist } from "@prisma/client";
import { BaseService } from "./../base-service";

import { createBlogPlaylist } from "./create-blog-playlist";
import { getBlogPlaylistById } from "./get-blog-playlist-by-id";
import { updateBlogPlaylist } from "./update-blog-playlist";
import { deleteBlogPlaylist } from "./delete-blog-playlist";
import { getAllBlogPlaylists } from "./get-all-blog-playlists";

interface BlogPlaylistService {
  createBlogPlaylist(data: Prisma.BlogPlaylistCreateInput): Promise<BlogPlaylist>;
  getBlogPlaylistById(id: string): Promise<BlogPlaylist | null>;
  updateBlogPlaylist(id: string, data: Prisma.BlogPlaylistUpdateInput): Promise<BlogPlaylist>;
  deleteBlogPlaylist(id: string): Promise<BlogPlaylist>;
  getAllBlogPlaylists(): Promise<BlogPlaylist[]>;
}

export type BlogPlaylistServiceReturnType<T extends keyof BlogPlaylistService> = Awaited<
  ReturnType<BlogPlaylistService[T]>
>;

export class BlogPlaylistServiceImplementation extends BaseService implements BlogPlaylistService {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async createBlogPlaylist(data: Prisma.BlogPlaylistCreateInput) {
    const result = await createBlogPlaylist(this.prisma, data);
    return result;
  }

  async getBlogPlaylistById(id: string) {
    const result = await getBlogPlaylistById(this.prisma, id);
    return result;
  }

  async updateBlogPlaylist(id: string, data: Prisma.BlogPlaylistUpdateInput) {
    const result = await updateBlogPlaylist(this.prisma, id, data);
    return result;
  }

  async deleteBlogPlaylist(id: string) {
    const result = await deleteBlogPlaylist(this.prisma, id);
    return result;
  }

  async getAllBlogPlaylists() {
    const result = await getAllBlogPlaylists(this.prisma);
    return result;
  }

  // <AUTO-GENERATED METHODS>

  protected async beforeAction(action: string, data: unknown) {
    super.beforeAction(action, data);
    // Custom logic specific to BlogPlaylistService
  }

  protected async afterAction(action: string, result: unknown) {
    super.afterAction(action, result);
    // Custom logic specific to BlogPlaylistService
  }
}



