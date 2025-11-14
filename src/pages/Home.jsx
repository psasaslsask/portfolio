import { NavLink } from "react-router-dom";
import warrior from "../assets/warrior.png";

export default function Home() {
  return (
    <div className="home-page fade-in">
      <div className="home-header">
        <img src={warrior} alt="Hero Avatar" className="home-avatar" />

        <div className="home-text">
          <h1 className="home-title">Welcome to Palak’s Realm</h1>

          <p className="home-subtitle">
            Software Engineer • Researcher • Builder of Intelligent Systems
          </p>

          <p className="home-description">
            On this journey, Palak combines engineering, creativity, and 
            resilience to build scalable systems, intuitive interfaces, 
            and AI-driven solutions. Explore her quests, skills, and 
            battle history as she continues leveling up in the tech world.
          </p>

          <div className="home-buttons">

            <NavLink to="/projects" className="home-btn">
              🎒 View Quests
            </NavLink>

            <NavLink to="/experience" className="home-btn">
              ⚔️ Battle History
            </NavLink>

            <NavLink to="/contact" className="home-btn highlight">
              💬 Join the Guild
            </NavLink>

          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="home-stats">
        <h2>Hero Stats</h2>

        <div className="stats-grid">
          <Stat label="Level" value="20" />
          <Stat label="XP" value="7800" />
          <Stat label="Primary Class" value="Software Engineer" />
          <Stat label="Specialization" value="AI / Full-Stack" />
          <Stat label="Strength" value="Leadership" />
          <Stat label="Trait" value="Resilience" />
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="stat-box">
      <span className="stat-label">{label}</span>
      <span className="stat-value">{value}</span>
    </div>
  );
}
