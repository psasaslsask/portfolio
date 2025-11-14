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

        <section className="bio-section bio-grid">

<div className="bio-card">
  <h3>📍 Present</h3>
  <p>
    I’m a software engineering student focused on building reliable,
    user-centered systems. I enjoy turning ideas into clean, functional 
    solutions and approaching every project with clarity and intention.
  </p>
</div>

<div className="bio-card">
  <h3>🕰 Past</h3>
  <p>
    My experiences across research, leadership, athletics, and technical 
    writing taught me discipline, consistency, and how to handle responsibility 
    early. These roles shaped how I solve problems and collaborate: steady, 
    focused, and always willing to learn.
  </p>
</div>

<div className="bio-card">
  <h3>⏭ Future</h3>
  <p>
    I’m excited to keep growing as an engineer who builds scalable products
    with meaningful impact. My goal is to contribute to teams where I can apply 
    my strengths, learn from experienced builders, and create software that’s 
    thoughtful, dependable, and genuinely useful.
  </p>
</div>

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
