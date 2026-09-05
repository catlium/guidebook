import "./guide-flow.css";

function GuideFlow() {
  return (
    <section className="guide-flow">
      <div className="guide-flow-heading">
        <p className="guide-label">HOW IT WORKS</p>

        <h2>Find it. Learn it. Use it.</h2>

        <p>
          GuideBook™ makes digitalization easier by turning complex technologies
          into simple, practical guides.
        </p>
      </div>

      <div className="guide-flow-steps">
        <div className="guide-step">
          <span className="step-number">01</span>

          <h3>Explore</h3>

          <p>
            Browse guides based on your organization's needs and discover useful
            digital tools.
          </p>
        </div>

        <div className="guide-step">
          <span className="step-number">02</span>

          <h3>Learn</h3>

          <p>
            Follow simple step-by-step instructions designed to make technology
            easy to understand.
          </p>
        </div>

        <div className="guide-step">
          <span className="step-number">03</span>

          <h3>Apply</h3>

          <p>
            Put what you learned into practice and start improving your
            organization's workflow.
          </p>
        </div>
      </div>
      <div className="explore-guide">
        <button className="exp-guide-btn">Explore Guides</button>
      </div>
    </section>
  );
}

export default GuideFlow;
