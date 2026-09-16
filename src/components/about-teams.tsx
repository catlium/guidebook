import "./about-teams.css";

function AboutTeam() {
  return (
    <section className="about-team">
      <div className="about-team-heading">
        <p className="team-label">OUR TEAM</p>

        <h2>Meet the people behind GuideBook™</h2>

        <p>
          A team working together to make digitalization simpler, more
          accessible, and more impactful for organizations.
        </p>
      </div>

      <div className="team-cards">
        <article className="team-card">
          <div className="team-image">
            <span>PHOTO</span>
          </div>

          <h3>Harsh  S. Salvi</h3>
          <p className="team-role">Front-end Dev Lead</p>
          <p className="team-description">
            Working on the development and digital solutions behind GuideBook.
          </p>
        </article>

        <article className="team-card">
          <div className="team-image">
            <span>PHOTO</span>
          </div>

          <h3>Arshad Shaikh</h3>
          <p className="team-role">Front-end Dev</p>
          <p className="team-description">
            Focused on making GuideBook simple, accessible, and user-friendly.
          </p>
        </article>

        <article className="team-card">
          <div className="team-image">
            <span>PHOTO</span>
          </div>

          <h3>Farhan A. Shaikh</h3>
          <p className="team-role">Front-end Dev</p>
          <p className="team-description">
            Developing practical content and researching useful digital tools.
          </p>
        </article>

        <article className="team-card">
          <div className="team-image">
            <span>PHOTO</span>
          </div>

          <h3>Sachin D. Jaiswal</h3>
          <p className="team-role">Educator/Instructor</p>
          <p className="team-description">
            Developing practical content and researching useful digital tools.
          </p>
        </article>

        <article className="team-card">
          <div className="team-image">
            <span>PHOTO</span>
          </div>

          <h3>Ashif Shaikh</h3>
          <p className="team-role">Paperwork & Research Survey conductor</p>
          <p className="team-description">
            Developing practical content and researching useful digital tools.
          </p>
        </article>
      </div>
    </section>
  );
}

export default AboutTeam;
