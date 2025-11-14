import XPBar from "../components/XPBar";

export default function Skills() {
  return (
    <div className="skills-page fade-in">
      <h1>🌟 Skill Tree</h1>
      <p className="skill-intro">
        These are the abilities, tools, and techniques Palak has mastered on her
        journey as a Software Engineer.
      </p>

      <div className="skill-tree">

        {/* ==== CATEGORY: Core Engineering ==== */}
        <section className="skill-section">
          <h2>⚙️ Core Engineering</h2>

          <SkillNode 
            name="Data Structures & Algorithms"
            level={85}
          />
          <SkillNode 
            name="Object-Oriented Design"
            level={80}
          />
          <SkillNode 
            name="System Architecture"
            level={70}
          />
        </section>

        {/* ==== CATEGORY: Development ==== */}
        <section className="skill-section">
          <h2>💻 Software Development</h2>

          <SkillNode 
            name="React.js"
            level={90}
          />
          <SkillNode 
            name="JavaScript"
            level={88}
          />
          <SkillNode 
            name="Python"
            level={92}
          />
          <SkillNode 
            name="FastAPI"
            level={78}
          />
          <SkillNode 
            name="SQL & Database Design"
            level={82}
          />
        </section>

        {/* ==== CATEGORY: AI / ML ==== */}
        <section className="skill-section">
          <h2>🧠 AI / Machine Learning</h2>

          <SkillNode 
            name="PyTorch"
            level={75}
          />
          <SkillNode 
            name="Model Training & Evaluation"
            level={72}
          />
          <SkillNode 
            name="Data Processing"
            level={80}
          />
        </section>

        {/* ==== CATEGORY: Tools ==== */}
        <section className="skill-section">
          <h2>🛠 Tools & Workflow</h2>

          <SkillNode 
            name="Git / GitHub"
            level={90}
          />
          <SkillNode 
            name="Linux / CLI"
            level={82}
          />
          <SkillNode 
            name="Docker"
            level={60}
          />
          <SkillNode 
            name="VS Code"
            level={92}
          />
        </section>

      </div>
    </div>
  );
}

/* -------- SKILL NODE COMPONENT -------- */
function SkillNode({ name, level }) {
  return (
    <div className="skill-node">
      <div className="skill-top">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>

      {/* XP bar under each skill */}
      <XPBar progress={level} />
    </div>
  );
}
