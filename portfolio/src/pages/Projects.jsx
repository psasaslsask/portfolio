import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div>
      <h1>🎒 Quest Log</h1>
      <p>These are some of my quests (projects):</p>

      <ProjectCard
        title="RhoFold+ RNA Structure Predictor"
        desc="ML-powered RNA 3D folding model with GPU acceleration and Streamlit UI."
        tech={["Python", "PyTorch", "Streamlit", "NVIDIA RTX"]}
        github={null}
        demo={null}
      />

      <ProjectCard
        title="SoloDiningConnect"
        desc="React + Firebase app for solo diners to find and share safe spots."
        tech={["React", "Firebase", "Tailwind"]}
        github={null}
        demo={null}
      />

      <ProjectCard
        title="Motor Vision Controller"
        desc="OpenCV + embedded motor controller for automated orientation detection."
        tech={["Python", "OpenCV", "Embedded"]}
        github={null}
        demo={null}
      />
    </div>
  );
}
