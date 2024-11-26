"use client";

import { useState, useTransition } from "react";
import { handleSeedAction } from "../actions/seed-actions";
import { ACTIONS } from "../types/types";

export const SeedManager = ({ prismaModels }: { prismaModels: string[] }) => {
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
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

    startTransition(async () => {
      try {
        const result = await handleSeedAction(selectedModels, action);
        setStatusMessage(result);
      } catch (error) {
        setStatusMessage(error.message);
      }
    });
  };

  return (
    <div className="seed-manager ">
      <h2 className="">Seed Manager</h2>
      <div className="border-[1px] flex gap-2 p-2">
        {prismaModels.map((model) => (
          <label key={model} className="model-checkbox">
            <input
              type="checkbox"
              checked={selectedModels.includes(model)}
              onChange={() => handleModelToggle(model)}
            />
            {model}
          </label>
        ))}
      </div>

      <div className="actions flex gap-4 my-2">
        <button
          onClick={() => handleBulkAction("bulkInsert")}
          disabled={isPending}
          className="bulk-insert border-[1px] p-1"
        >
          {isPending ? "Processing..." : "Bulk Insert"}
        </button>
        <button
          onClick={() => handleBulkAction("deleteAll")}
          disabled={isPending}
          className="delete-all border-[1px] p-1"
        >
          {isPending ? "Processing..." : "Delete All"}
        </button>
        <button
          onClick={() => setSelectedModels(prismaModels)}
          disabled={isPending}
          className="delete-all border-[1px] p-1"
        >
          selectAll
        </button>
        <button
          onClick={() => setSelectedModels([])}
          disabled={isPending}
          className="delete-all border-[1px] p-1"
        >
          unselectAll
        </button>
      </div>

      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </div>
  );
};
