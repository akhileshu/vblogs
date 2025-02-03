"use client";
import {
  DropdownProvider,
  HierarchialDropdowns,
  useDropdownContext,
} from "@/features/hierarchical-dropdowns";
import { fetchTechnologiesToMarkInterested } from "@/features/hierarchical-dropdowns/level-options-fetchers/fetch-technologies-to-mark-interested";
import { fetchTopicsToMarkInterested } from "@/features/hierarchical-dropdowns/level-options-fetchers/fetch-topics-to-mark-interested copy";
import {
  FetchOptionsForLevel,
  Option,
} from "@/features/hierarchical-dropdowns/types";
import { cn } from "@/lib/utils";
import { deleteUserInterestHandler } from "@/server-actions/prisma-handlers/user-interest";
import { getCachedLoggedInUserInterestsHandler } from "@/server-actions/prisma-handlers/user-interest/get-logged-in-user-interests";
import { extractResultData } from "@/server-actions/utils/response";
import { Btn } from "@/shared/components/buttons";
import { DeletionForm } from "@/shared/components/delete-form";
import { LoaderErrorWrapper } from "@/shared/components/Loader";
import { AppCard, AppLink } from "@/shared/components/standard-components";
import { revalidateTagUtil } from "@/shared/utils/revalidateTagUtils";
import { InterestType, Technology, Topic } from "@prisma/client";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { AddUserInterestForm } from "./add-user-interest-form";
import Link from "next/link";
import { getUrl } from "@/shared/lib/get-url";
import { NoData } from "@/shared/components/no-data";
type UserInterestProps = {
  className?: string;
  result: Awaited<ReturnType<typeof getCachedLoggedInUserInterestsHandler>>;
};

const UserInterest: React.FC<UserInterestProps> = ({ className, result }) => {
  const { data } = extractResultData(result);
  const technologies = data?.filter(
    (item) => item.interestType === "TECHNOLOGY"
  );
  const topics = data?.filter((item) => item.interestType === "TOPIC");
  return (
    <LoaderErrorWrapper className={cn("", className)} result={result}>
      <AppCard className="min-h-64 m-2 border-none flex gap-2 divide-x">
        <DropdownProvider>
          <div className="flex-1">
            <NoData
              className="h-80 overflow-y-auto"
              noData={!technologies?.length}
              noDataMessage="you did not selected your favourite technologies yet"
            >
              {technologies?.map(({ id, technology }, index) => (
                <Interest
                  key={index}
                  interestId={id}
                  interest={technology}
                  interestType="TECHNOLOGY"
                />
              ))}
            </NoData>
            <AddTechnologies />
          </div>
        </DropdownProvider>
        <DropdownProvider>
          <div className="flex-1">
            <NoData
              className="h-80 overflow-y-auto"
              noData={!topics?.length}
              noDataMessage="you did not selected your favourite topics yet"
            >
              {topics?.map(({ id, topic }, index) => (
                <Interest
                  interestId={id}
                  key={index}
                  interest={topic}
                  interestType="TOPIC"
                />
              ))}
            </NoData>
            <AddTopics className="flex-1 pl-2" />
          </div>
        </DropdownProvider>
      </AppCard>
    </LoaderErrorWrapper>
  );
};

export default UserInterest;

const Interest = <T extends Technology | Topic | null>({
  interest,
  interestType,
  interestId,
}: {
  interest: T;
  interestType: InterestType;
  interestId: string;
}) => {
  if (!interest) return null;
  const { id, title } = interest;
  const param =
    InterestType.TECHNOLOGY === interestType
      ? "technologyIdsCsv"
      : "topicIdsCsv";
  return (
    <div className="group flex justify-between items-center gap-2 hover:bg-gray-50 px-1 h-8">
      <AppLink href={getUrl("blogSearchResults", undefined, `${param}=${id}`)}>
        {title}
      </AppLink>{" "}
      {/* bug : even after deletion , doesn't go away immediately - can try to delete 2nd time - causing error */}
      <DeletionForm
        actionHandler={deleteUserInterestHandler}
        hiddenFields={{ userInterestId: interestId }}
        className="group-hover:block hidden py-0"
        tagToRevalidate="get-logged-in-user-interests"
      />
    </div>
  );
};

const AddTechnologies = ({ className }: { className?: string }) => {
  return (
    <AddInterest
      className={className}
      fetchOptions={fetchTechnologiesToMarkInterested}
      dropdownIndex={1}
      AddInterestButtonText="Add Technologies"
      type="TECHNOLOGY"
    />
  );
};

const AddTopics = ({ className }: { className?: string }) => {
  return (
    <AddInterest
      className={className}
      fetchOptions={fetchTopicsToMarkInterested}
      dropdownIndex={2}
      AddInterestButtonText="Add Topics"
      type="TOPIC"
    />
  );
};

const AddInterest = ({
  className,
  fetchOptions,
  dropdownIndex,
  AddInterestButtonText,
  type,
}: {
  className?: string;
  fetchOptions: FetchOptionsForLevel<Option>;
  dropdownIndex: number;
  AddInterestButtonText: string;
  type: InterestType;
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { selectedOptions, setSelectedOptions } = useDropdownContext();
  const selectedIds =
    selectedOptions[dropdownIndex]?.map((item) => item.id) ?? [];
  const clearForm = () => {
    setShowDropdown(false);
    setSelectedOptions([]);
  };

  return (
    <div className={cn("", className)}>
      {showDropdown ? (
        <div>
          <HierarchialDropdowns
            className="flex-1 m-0"
            fetchOptionsForLevel={fetchOptions}
          />
          <div className="space-x-4 flex">
            <Btn onClick={clearForm} text={"cancel"} />
            {selectedIds?.length ? (
              <AddUserInterestForm
                onSuccess={() => {
                  revalidateTagUtil(`get-logged-in-user-interests`);
                  clearForm();
                }}
                type={type}
                ids={selectedIds}
              />
            ) : null}
          </div>
        </div>
      ) : (
        <Btn
          onClick={() => setShowDropdown(true)}
          text={AddInterestButtonText}
          icon={<IoMdAdd size={20} />}
        />
      )}
    </div>
  );
};
