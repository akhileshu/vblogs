import {
  getModelCountList,
  // getPrismaModels,
} from "@/features/seeding/actions/get-prisma-model-list";
import { SeedManager } from "@/features/seeding/compoents/SeedManager";
// import { allPrismaModels } from "@/features/seeding/temp/get-all-models";

export default async function SeedManagerWrapper() {
  // const prismaModels = allPrismaModels;
  const modelCountList = await getModelCountList();

  return <SeedManager modelCountList={modelCountList} />;
}
