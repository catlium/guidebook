import "./resource.css";
import hero1 from "../assets/hero-1.jpeg";

function ResourceFeature() {
  return (
    <section className="featured-section">
      <div className="section-heading">
        <h2>
          Featured Resource
        </h2>

        <p>
          Start with our most useful guide for beginning
          your digitalization journey.
        </p>
      </div>

      <div className="featured-resource">
        <div className="featured-image">
          <img
            src={hero1}
            alt="Digitalization guide"
          />

          <div className="featured-label">
            FEATURED GUIDE
          </div>
        </div>

        <div className="featured-details">
          <span className="resource-type">
            DIGITALIZATION
          </span>

          <h3>
            The Complete Guide to Digitalizing Your Organization
          </h3>

          <p>
            Learn how to identify manual processes, choose
            the right digital tools and create efficient
            workflows without making technology unnecessarily
            complicated.
          </p>

          <div className="featured-bottom">
            <span>
              10 min read
            </span>

            <a href="#guides">
              Read Guide →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResourceFeature;