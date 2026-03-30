import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video Editor</h4>
                <h5>Freelance / Self-Taught</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Started editing videos using Adobe Premiere Pro and After Effects.
              Developed expertise in colour grading, motion graphics, audio
              syncing, and visual storytelling through self-directed projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BTech Student (AI & Data Science)</h4>
                <h5>Sri Shanmugha College of Engineering and Technology</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Pursuing a Bachelor of Technology in Artificial Intelligence and
              Data Science. Maintaining a CGPA of 7.1 while continuing to
              develop creative video editing and digital marketing skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Creative Content Editor</h4>
                <h5>DaVinci Resolve & Digital Marketing</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Expanding into DaVinci Resolve for professional-grade colour
              grading and video production. Combining video editing with digital
              marketing and Photoshop skills to deliver end-to-end creative
              content solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
