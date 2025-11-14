import warrior from "../assets/warrior.png";

export default function About() {
  return (
    <div className="about-page fade-in">
      <h1>📜 Character Profile</h1>

      <div className="profile-container">
        
        {/* LEFT: Avatar + Basic Info */}
        <div className="profile-left">
          <img src={warrior} alt="Hero Avatar" className="profile-avatar" />

          <h2 className="profile-name">Palak Sharma</h2>
          <p className="profile-title">Class: Software Engineer</p>
          <p className="profile-rank">Rank: Level 20</p>

          <div className="stat-block">
            <p><strong>XP:</strong> 7800 / 10000</p>
            <p><strong>HP:</strong> 95 / 100</p>
            <p><strong>Mana:</strong> 120</p>
          </div>
        </div>

        {/* RIGHT: Bio + Abilities */}
        <div className="profile-right">

          <section className="bio-section">
            <h3>🧾 Lore / Biography</h3>
            <p>
              Born with the rare combination of determination, discipline, and creativity,
              Palak is a warrior who mastered both the academic battlefield and the 
              world of real-world engineering quests. After earning achievements in 
              athletics, innovation, and accelerated scholarship, she channeled her 
              talents into software engineering — blending logic with artistry.
            </p>
            <p>
              She fights with clean architecture, efficient systems, and beautifully 
              designed interfaces — building tools that empower users and scale with grace.
            </p>
          </section>

          <section className="ability-section">
            <h3>✨ Special Abilities</h3>
            <ul>
              <li>⚡ System Design Strike – Breaks down complex systems with clarity</li>
              <li>🛠 Full-Stack Dual-Wield – Mastery of frontend + backend tools</li>
              <li>🧠 ML Insight Vision – Understands patterns & modeling pipelines</li>
              <li>🎯 Precision Debugging – Locates hidden bugs with uncanny accuracy</li>
              <li>⚔️ Performance Optimization Slash– Reduces runtime with sharp efficiency</li>
            </ul>
          </section>

          <section className="achievement-section">
            <h3>🏆 Achievements Unlocked</h3>
            <ul>
              <li>🥇 National Gold Medalist — Netball Champion</li>
              <li>🥋 Black Belt — Taekwondo Warrior Rank</li>
              <li>🧪 Patent Holder — Innovation Quest Completed</li>
              <li>🎓 Graduating in 2.5 Years — Academic Fast-Track Achievement</li>
              <li>💼 Oracle SWE Intern — Enterprise Battlefield Experience</li>
              <li>🎤 GHC 2025 Participant — Networking & Knowledge Power-Up</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
