import { cn } from "@/lib/utils";
import { useState } from "react";

interface UseMultiStepRendererArgs {
  steps: string[];
}

export const useMultiStepRenderer = ({ steps }: UseMultiStepRendererArgs) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [furthestStepReached, setFurthestStepReached] = useState(0); // Tracks the furthest step reached

  const next = () => {
    if (currentStep < steps.length - 1) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
      setFurthestStepReached((prev) => Math.max(prev, newStep)); // Update furthestStepReached
    }
  };

  const back = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const goToStep = (stepIndex: number) => {
    if (stepIndex <= furthestStepReached) {
      // Allow only up to furthestStepReached
      setCurrentStep(stepIndex);
    }
  };

  return { currentStep, furthestStepReached, next, back, goToStep };
};

import React from "react";

type ProgressBarProps = {
  steps: string[];
  currentStep: number;
  onStepClick: (stepIndex: number) => void;
  furthestStepReached: number;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  steps,
  currentStep,
  onStepClick,
  furthestStepReached,
}) => {
  return (
    <div className="flex items-center px-52">
      {steps.map((step, index) => (
        <div
          key={step}
          className={cn("flex items-center", {
            "w-full": index < steps.length - 1,
          })}
        >
          <div
            className={cn(
              "w-8 h-8 flex items-center justify-center rounded-full cursor-pointer bg-gray-300 text-gray-600",
              {
                "bg-blue-500 text-white": index <= furthestStepReached,
                "border-4 border-green-500":index===currentStep
              }
            )}
            onClick={() => onStepClick(index)}
          >
            {index + 1}
          </div>
          {index < steps.length - 1 && (
            <div
              className={`h-1 flex-1 mx-2 ${
                index < furthestStepReached ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export const MultiStepRendererNavigationButtons = ({
  back,
  next,
  currentStep,
  steps,
}: {
  next: () => void;
  back: () => void;
  currentStep: number;
  steps: string[];
}) => {
  return (
    <div className="my-2 flex justify-between">
      <button
        className="bg-gray-500 text-white px-2 py-1 rounded flex-center gap-2"
        onClick={back}
        disabled={currentStep === 0}
      >
        <FaArrowLeft />
        Back
      </button>
      <button
        className="bg-blue-500 text-white px-2 py-1 rounded flex-center gap-2"
        onClick={next}
        disabled={currentStep === steps.length - 1}
      >
        Next
        <FaArrowRight />
      </button>
    </div>
  );
};
