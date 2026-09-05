import "./cta-footer.css";

function CTAFooter() {
  return (
    <section className="cta-footer">

      {/* CTA */}
      <div className="cta-content">
        <p className="cta-label">GET STARTED</p>

        <h2>Ready to make digitalization easier?</h2>

        <p>
          Explore our guides and discover simple ways to improve
          your organization's digital workflow.
        </p>

        <button className="cta-button">
          Explore All Guides →
        </button>
      </div>

      {/* Footer */}
      <footer className="footer">

        <div className="footer-logo">
          GuideBook™
        </div>

        <p>
          Making digitalization simple and accessible.
        </p>

        <div className="footer-links">
          <a href="#">CatLium™</a>
          <a href="#">Guides</a>
          <a href="#">Resources</a>
          <a href="#">About</a>
        </div>

        <p className="footer-copyright">
          © 2026 GuideBook™ & CatLium™. All rights reserved.
        </p>

      </footer>

    </section>
  );
}

export default CTAFooter;