export default function XPBar({ progress = 0 }) {
    return (
      <div className="xp-wrapper">
        <div className="xp-label">XP</div>
  
        <div className="xp-bar">
          <div
            className="xp-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
  
        <div className="xp-percent">{progress}%</div>
      </div>
    );
  }
  