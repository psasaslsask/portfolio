export default function Experience() {
    return (
      <div className="experience-page fade-in">
        <h1>⚔️ Battle History</h1>
        <p className="exp-intro">
          A chronicle of major battles, quests, and milestones conquered by Palak
          throughout her journey as a Software Engineer and Leader.
        </p>
  
        <div className="battle-timeline">
  
          {/* ORACLE SWE INTERN */}
          <BattleCard
            year="2025"
            title="Software Engineer Intern — Oracle"
            type="Boss Battle"
            xp="+1200 XP"
            description={[
              "Developed automation tools and APIs to optimize internal engineering workflows.",
              "Built reservation dashboards using FastAPI + SQLAlchemy for hardware teams.",
              "Improved backend reliability and worked cross-functionally with engineering groups.",
            ]}
          />
  
          {/* GHC */}
          <BattleCard
            year="2025"
            title="Grace Hopper Celebration — Attendee"
            type="Knowledge Quest"
            xp="+500 XP"
            description={[
              "Learned distributed systems engineering, ML workflows, and large-scale SWE practices.",
              "Connected with engineers from Amazon, Meta, Citadel, LinkedIn, and startups.",
              "Gained clarity on technical interviews, career pathways, and system design.",
            ]}
          />
  
          {/* UML GRADER */}
          <BattleCard
            year="2024"
            title="CS Grader / Teaching Support — UMass Lowell"
            type="Support Quest"
            xp="+600 XP"
            description={[
              "Graded assignments for algorithms, AI, and compilers courses.",
              "Provided debugging support and reinforced foundational CS concepts for students.",
              "Supported faculty by identifying learning gaps and improving course efficiency.",
            ]}
          />
  
          {/* NYAS PROGRAMS */}
          <BattleCard
            year="2022–2023"
            title="Young Member — New York Academy of Sciences"
            type="Academy Quest"
            xp="+650 XP"
            description={[
              "Participated in the '1000 Girls, 1000 Futures' and 'Junior Academy' STEM programs.",
              "Worked internationally on 'The Green Redesign' project improving energy efficiency using 5G & IoT.",
              "Collaborated with global mentors and peers to develop research-driven solutions.",
            ]}
          />
  
          {/* TECHNICAL WRITER — Jankaal Sandesh */}
          <BattleCard
            year="2021"
            title="Technical Writer & Intern — Jankaal Sandesh (Newspaper)"
            type="Support Quest"
            xp="+700 XP"
            description={[
              "Researched and published articles on Artificial Intelligence, Cloud Computing, and Cybersecurity.",
              "Collaborated closely with copy editors and maintained editorial deadlines.",
              "Produced high-quality, audience-specific technical content.",
            ]}
          />
  
          {/* STOCK PREDICTION RESEARCH */}
          <BattleCard
            year="2021"
            title="Research Assistant — Hybrid Deep Learning Stock Prediction Model"
            type="Research Quest"
            xp="+900 XP"
            description={[
              "Supported research by analyzing financial datasets and identifying deep-learning-ready trends.",
              "Created surveys, polls, and questionnaires aligned with research requirements.",
              "Compiled findings into charts, graphs, mockups, and structured documentation.",
            ]}
          />
  
          {/* TECHHELPFORALL — Leadership Role */}
          <BattleCard
            year="2021"
            title="Head of Youth Ambassadors — TechHelpForAll"
            type="Leadership Battle"
            xp="+1000 XP"
            description={[
              "Led a team of 15 youth ambassadors within a global student-led nonprofit.",
              "Collaborated with NGOs on web development, fundraisers, LinkedIn pages, and tutoring.",
              "Produced free educational tutorials to help people navigate modern applications.",
              "Expanded the organization’s outreach mission through community support initiatives.",
            ]}
          />
  
        </div>
      </div>
    );
  }
  
  /* ----------- BATTLE CARD COMPONENT ----------- */
  
  function BattleCard({ year, title, type, xp, description }) {
    return (
      <div className="battle-card">
        <div className="battle-header">
          <span className="battle-year">{year}</span>
          <span className="battle-type">{type}</span>
        </div>
  
        <h2 className="battle-title">{title}</h2>
  
        <ul className="battle-desc">
          {description.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
  
        <div className="battle-xp">{xp}</div>
      </div>
    );
  }
  