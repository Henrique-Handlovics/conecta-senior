export default function ProgressBar({
  currentStep,
  totalSteps
}) {

  const progress =
    ((currentStep + 1) / totalSteps) * 100;

  return (

    <div className="progress-container">

      <div
        className="progress-bar"
        style={{
          width: `${progress}%`
        }}
      />

    </div>

  );
}