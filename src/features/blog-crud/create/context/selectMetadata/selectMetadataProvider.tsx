import { ReactNode } from "react";
import { GoalsProvider } from "./goals";
import { TechnologiesProvider } from "./technologies";
import { TopicsProvider } from "./topics";
import { TagsProvider } from "./tags";

export const SelectMetadataProvider = ({
  children,
}: {
  children: ReactNode;
}) => (
  <GoalsProvider>
    <TechnologiesProvider>
      <TopicsProvider>
        <TagsProvider>{children}</TagsProvider>
      </TopicsProvider>
    </TechnologiesProvider>
  </GoalsProvider>
);
