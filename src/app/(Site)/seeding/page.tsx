import { getPrismaModels } from "@/features/seeding/actions/getAllModels";
import { SeedManager } from "@/features/seeding/compoents/SeedManager";
import { allPrismaModels } from "@/features/seeding/temp/get-all-models";

export default async function SeedManagerWrapper() {
  // const prismaModels = allPrismaModels;
  const prismaModels = await getPrismaModels();

  return <SeedManager prismaModels={prismaModels} />;
}
