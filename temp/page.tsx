"use client";
import {
  MultiStepRendererNavigationButtons,
  ProgressBar,
  useMultiStepRenderer,
} from "@/shared/hooks/useMultiStepRenderer";
import React from "react";

const MultiStepForm = () => {
  const steps = ["Step 1", "Step 2", "Step 3" , "Step 4", "Step 5"];
  const { currentStep,furthestStepReached, next, back, goToStep } = useMultiStepRenderer({
    steps,
  });

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <div>Content for Step 1</div>;
      case 1:
        return <div>Content for Step 2</div>;
      case 2:
        return <div>Content for Step 3</div>;
      case 3:
        return <div>Content for Step 4</div>;
      case 4:
        return <div>Content for Step 5</div>;
      default:
        return <div>Unknown Step</div>;
    }
  };

  return (
    <div className="p-4 border rounded-sm">
      <MultiStepRendererNavigationButtons back={back} next={next} currentStep={currentStep} steps={steps} />
      <ProgressBar
        steps={steps}
        furthestStepReached={furthestStepReached}
        currentStep={currentStep}
        onStepClick={goToStep}
      />
      <div className="mt-6 mx-auto w-fit">
        {renderStepContent()}
      </div>
    </div>
  );
};

export default MultiStepForm;
