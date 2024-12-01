import { ReactNode } from "react";
import { GoalProvider } from "./goals";
import { TopicProvider } from "./topics";
import { TagProvider } from "./tags";
import { TechnologyProvider } from "./technologies";

export const SelectMetadataProvider = ({
  children,
}: {
  children: ReactNode;
}) => (
  <GoalProvider>
    <TechnologyProvider>
      <TopicProvider>
        <TagProvider>{children}</TagProvider>
      </TopicProvider>
    </TechnologyProvider>
  </GoalProvider>
);
