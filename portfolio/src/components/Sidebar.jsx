import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import SoundToggle from "./SoundToggle";
import XPBar from "./XPBar";
import warrior from "../assets/warrior.png"; // make sure this file exists

export default function Sidebar() {
  return (
    <div className="sidebar">
      
      {/* Avatar + Level Section */}
      <div className="avatar-section">
        <img src={warrior} alt="avatar" className="avatar-sprite" />

        <h2 className="player-name">Palak Sharma</h2>
        <p className="player-level">Level 20 — Software Engineer</p>

        {/* XP PROGRESS */}
        <XPBar progress={78} />
      </div>

      {/* RPG Navigation Menu */}
      <nav className="menu">
        <MenuLink to="/" label="🏠 Home Base" />
        <MenuLink to="/about" label="📜 Character Profile" />
        <MenuLink to="/projects" label="🎒 Quest Log" />
        <MenuLink to="/experience" label="⚔️ Battle History" />
        <MenuLink to="/skills" label="🌟 Skill Tree" />
        <MenuLink to="/contact" label="💬 Guild Contact" />
      </nav>

      {/* Settings */}
      <div className="sidebar-footer">
        <ThemeToggle />
        <SoundToggle />
      </div>
    </div>
  );
}

function MenuLink({ to, label }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        "menu-item " + (isActive ? "menu-active" : "")
      }
    >
      {label}
    </NavLink>
  );
}
