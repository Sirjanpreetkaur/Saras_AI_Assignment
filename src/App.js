import "./styles.css";

const journeyData = [
  {
    id: 1,
    position: "left",
    title: "Powers of AI",
    skills: ["AI Fundamentals"],
    color: "red",
  },
  {
    id: 2,
    position: "right",
    title: "Python Programming with AI, Cloud Fundamentals With AI",
    skills: [
      "Python",
      "Programming",
      "Data Types",
      "Skill 1",
      "Skill 2",
      "Python Programming",
    ],
    color: "purple",
  },
  {
    id: 3,
    position: "left",
    title: "Python Programming with AI, Cloud Fundamentals With AI",
    skills: [
      "Python",
      "Programming",
      "Data Types",
      "Skill 1",
      "Skill 2",
      "Python Programming",
    ],
    color: "purple",
  },
  {
    id: 4,
    position: "right",
    title: "Python Programming with AI, Cloud Fundamentals With AI",
    skills: [
      "Python",
      "Programming",
      "Data Types",
      "Skill 1",
      "Skill 2",
      "Python Programming",
    ],
    color: "purple",
  },
  {
    id: 5,
    position: "left",
    title: "Python Programming with AI, Cloud Fundamentals With AI",
    skills: [
      "Python",
      "Programming",
      "Data Types",
      "Skill 1",
      "Skill 2",
      "Python Programming",
    ],
    color: "purple",
  },
  {
    id: 6,
    position: "right",
    title: "Python Programming with AI, Cloud Fundamentals With AI",
    skills: [
      "Python",
      "Programming",
      "Data Types",
      "Skill 1",
      "Skill 2",
      "Python Programming",
    ],
    color: "orange",
  },
  {
    id: 7,
    position: "left",
    title: "Python Programming with AI, Cloud Fundamentals With AI",
    skills: [
      "Python",
      "Programming",
      "Data Types",
      "Skill 1",
      "Skill 2",
      "Python Programming",
    ],
    color: "purple",
  },
  {
    id: 8,
    position: "right",
    title: "Python Programming with AI, Cloud Fundamentals With AI",
    skills: [
      "Python",
      "Programming",
      "Data Types",
      "Skill 1",
      "Skill 2",
      "Python Programming",
    ],
    color: "purple",
  },
  {
    id: 9,
    position: "left",
    title: "Python Programming with AI, Cloud Fundamentals With AI",
    skills: [
      "Python",
      "Programming",
      "Data Types",
      "Skill 1",
      "Skill 2",
      "Python Programming",
    ],
    color: "orange",
  },
  {
    id: 10,
    position: "right",
    title: "Python Programming with AI, Cloud Fundamentals With AI",
    skills: [
      "Python",
      "Programming",
      "Data Types",
      "Skill 1",
      "Skill 2",
      "Python Programming",
    ],
    color: "purple",
  },
];

const JourneyCard = ({ item }) => {
  return (
    <div className={`journey-card ${item.position} ${item.color}`}>
      <div className="card-badge">{item.id}</div>
      <div className="card-content">
        <h3 className="card-title">{item.title}</h3>
        <div className="skills-section">
          <span className="skills-label">Skills:</span>
          <div className="skills-tags">
            {item.skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="learning-journey-container">
      {/* Header */}
      <header className="journey-header">
        <div className="logo">
          <div className="logo-icon">
            <span className="logo-text">AI</span>
          </div>
          <div className="logo-name">
            <strong>SARAS AI</strong>
            <p>INSTITUTE</p>
          </div>
        </div>
        <div className="step-indicator">
          <span className="step-text">Step 04</span>
          <span className="step-total">/ 05</span>
        </div>
      </header>

      {/* Timeline Section */}
      <div className="timeline-wrapper">
        <div className="timeline-track">
          <div className="timeline-line"></div>

          {/* Journey Cards */}
          {journeyData.map((item) => (
            <div key={item.id} className="timeline-item">
              {item.position === "left" && (
                <>
                  <div className="timeline-content left">
                    <JourneyCard item={item} />
                  </div>
                  <div className="timeline-dot"></div>
                  <div className="timeline-spacer"></div>
                </>
              )}

              {item.position === "right" && (
                <>
                  <div className="timeline-spacer"></div>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content right">
                    <JourneyCard item={item} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

