import { CatchErrorTypedReturn } from "@/types/resolvedPromise";
import { createContext, ReactNode, useContext, useState } from "react";
import { getTechnologiesByGoalId } from "../../actions/getCategory";

type Technologies = {
  selectedTechnologyId: string | null;
  errorResultArray: CatchErrorTypedReturn<typeof getTechnologiesByGoalId>;
};
type TechnologiesContextType = {
  technologies: Technologies;
  setTechnologyId: (technologyId: string | null) => void;
  setTechnologyResultArray: (
    errorResult: CatchErrorTypedReturn<typeof getTechnologiesByGoalId>
  ) => void;
  resetTechnologies: () => void;
  setTechnologies: (technologies: Technologies) => void;
};

const TechnologiesContext = createContext<TechnologiesContextType | undefined>(
  undefined
);

export const useTechnologies = () => {
  const context = useContext(TechnologiesContext);
  if (!context) {
    throw new Error("useTechnology must be used within a TechnologyProvider");
  }
  return context;
};

export const TechnologiesProvider = ({ children }: { children: ReactNode }) => {
  const [technologies, setTechnologies] = useState<Technologies>({
    selectedTechnologyId: null,
    errorResultArray: [undefined, undefined],
  });

  const setTechnologyId = (technologyId: string | null) => {
    setTechnologies((prev) => ({
      ...prev,
      selectedTechnologyId: technologyId,
    }));
  };

  const setTechnologyResultArray = (
    errorResult: CatchErrorTypedReturn<typeof getTechnologiesByGoalId>
  ) => {
    setTechnologies((prev) => ({ ...prev, errorResultArray: errorResult }));
  };

  const resetTechnologies = () => {
    setTechnologies({
      selectedTechnologyId: null,
      errorResultArray: [undefined, undefined],
    });
  };

  return (
    <TechnologiesContext.Provider
      value={{
        technologies,
        setTechnologyId,
        setTechnologyResultArray,
        resetTechnologies,setTechnologies
      }}
    >
      {children}
    </TechnologiesContext.Provider>
  );
};
