import {
  GoalsServer,
  TechnologiesServer,
  TopicsServer,
} from "@/features/blog-crud/create/components/server";

export default async function SelectMetadata(props: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {

  /* 
  there is a problem with this approach 
  even if single search param changes , all below params are recalcualted , as they are props they causse unnecessary re-renders
  because fetching is causing via rerenders ,not able to set loading using Suspense
  
  */
  const searchParams = await props.searchParams;

  const selectedGoalId = searchParams?.goalId;
  const selectedTechId = searchParams?.techId;
  const selectedTopicId = searchParams?.topicId;

  return (
    <div>
      <GoalsServer selectedGoalId={selectedGoalId} />

      {typeof selectedGoalId==="string" && (
        <TechnologiesServer
          selectedGoalId={selectedGoalId}
          selectedTechId={selectedTechId}
        />
      )}

      {typeof selectedTechId==="string" && (
        <TopicsServer
          selectedTechId={selectedTechId}
          selectedTopicId={selectedTopicId}
        />
      )}
    </div>
  );
}
