import { useEffect, useState } from "react";

import ProgressBar from "./ProgressBar";
import TutorialStep from "./TutorialStep";

export default function TutorialModal({ tutorial, onClose }) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    setCurrentStep(0);
  }, [tutorial]);

  if (!tutorial) return null;

  const totalSteps = tutorial.steps.length;

  function nextStep() {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  }

  function previousStep() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }

  return (
    <div className="overlay">
      <div className="modal">
        <button onClick={onClose}>✕</button>

        <h2>
          {tutorial.icon} {tutorial.title}
        </h2>

        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

        <TutorialStep
          step={tutorial.steps[currentStep]}
          currentStep={currentStep}
        />

        <div className="buttons">
          <button onClick={previousStep}  disabled={currentStep === 0}>Anterior</button>

          <button onClick={currentStep === totalSteps - 1 ? onClose : nextStep}>
            {currentStep === totalSteps - 1 ? "Finalizar" : "Próximo"}
          </button>
        </div>
      </div>
    </div>
  );
}
