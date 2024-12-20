"use client";

import { Btn } from "@/components/app/buttons";
import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { revalidateTagUtil } from "@/shared/utils/revalidateTagUtils";
import { useState, useTransition } from "react";
import { getPrismaModels } from "../actions/getAllModels";
import { handleSeedAction } from "../actions/seed-actions";
import { ACTIONS } from "../types/types";

export const SeedManager = ({
  modelCountList,
}: {
  modelCountList: {
    model: string;
    rowCount: number;
  }[];
}) => {
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  const [isBulkInsertPending, setIsBulkInsertPending] =
    useState<boolean>(false);
  const [isDeleteAllPending, setIsDeleteAllPending] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleModelToggle = (model: string) => {
    setSelectedModels((prev) =>
      prev.includes(model) ? prev.filter((m) => m !== model) : [...prev, model]
    );
  };

  const handleBulkAction = (action: (typeof ACTIONS)[keyof typeof ACTIONS]) => {
    if (selectedModels.length === 0) {
      alert("Please select at least one model.");
      return;
    }
    const setPendingState =
      action === "bulkInsert" ? setIsBulkInsertPending : setIsDeleteAllPending;
    setPendingState(true);
    startTransition(async () => {
      try {
        const result = await handleSeedAction(selectedModels, action);
        setStatusMessage(result);
        selectedModels.forEach(
          async (model) => await revalidateTagUtil(`row-count-${model}`)
        );
        setSelectedModels([]);
      } catch (error) {
        setStatusMessage(getErrorMsg(error));
      } finally {
        setPendingState(false);
      }
    });
  };

  return (
    <div className="seed-manager ">
      <h2 className="w-fit border-[1px] my-4 p-1 bg-indigo-400 rounded-sm text-white">
        Seed Manager
      </h2>
      <div className="border-[1px] rounded-md flex p-2 ">
        {modelCountList.map((item) => {
          const { model, rowCount } = item;
          return (
            <label key={model} className="model-checkbox border-r-[1px] px-4">
              <input
                className="mr-2"
                type="checkbox"
                checked={selectedModels.includes(model)}
                onChange={() => handleModelToggle(model)}
              />
              {model}
              <p className="text-sm">count : {rowCount}</p>
            </label>
          );
        })}
      </div>

      <div className="actions flex gap-4 my-5 text-sm text-white">
        <Btn
          text={"Bulk Insert"}
          isPending={isBulkInsertPending}
          onClick={() => handleBulkAction("bulkInsert")}
          disabled={isPending || selectedModels.length === 0}
          className="bg-indigo-400"
        />
        <Btn
          text={"Delete All"}
          onClick={() => {
            if (confirm("Are you sure you want to delete All rows "))
              handleBulkAction("deleteAll");
          }}
          isPending={isDeleteAllPending}
          disabled={isPending || selectedModels.length === 0}
          className="bg-red-500"
        />
        <Btn
          text={"selectAll"}
          onClick={async () => {
            const models = await getPrismaModels();
            setSelectedModels(models);
          }}
          disabled={isPending}
          className="bg-indigo-400"
        />
        <Btn
          text={"unselectAll"}
          onClick={() => setSelectedModels([])}
          disabled={isPending}
          className="bg-indigo-400"
        />
      </div>

      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </div>
  );
};
