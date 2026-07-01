import { useState } from "react";
import TutorialCard from "./TutorialCard";
import TutorialModal from "./TutorialModal";
import { tutorials } from "./tutorials";

export default function TutorialsSection() {

  const [selectedTutorial,
    setSelectedTutorial] = useState(null);

  return (

    <section>

      <div className="tutorial-grid">

        {tutorials.map((tutorial) => (

          <TutorialCard
            key={tutorial.id}
            tutorial={tutorial}
            onOpen={setSelectedTutorial}
          />

        ))}

      </div>

      <TutorialModal
        tutorial={selectedTutorial}
        onClose={() =>
          setSelectedTutorial(null)
        }
      />

    </section>

  );
}