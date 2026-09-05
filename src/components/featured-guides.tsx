import GuideCard from "./guide-card";
import "./featured-guides.css";
import googleworkspace from "../assets/google-workspace-gc.png";
import digitalpayments from "../assets/digital-payments-gc.jpg";
import socialmedia from "../assets/social-media-gc.jpeg";

function FeaturedGuides() {
  return (
    <section className="featured-guides">
      <div className="featured-guides-heading">
        <p className="featured-label">FEATURED GUIDES</p>

        <h2>Explore our most useful guides</h2>

        <p>
          Start with some of our most popular guides and discover simple ways to
          improve your organization's digital workflow.
        </p>
      </div>

      <div className="featured-guides-list">
        <GuideCard
          image={googleworkspace}
          title="Google Workspace"
          category="PRODUCTIVITY"
          description="Learn how to use Google Workspace to improve your organization's everyday workflow."
        />

        <GuideCard
          image={digitalpayments}
          title="Digital Payments"
          category="FINANCE"
          description="Learn how to introduce digital payments and make financial transactions easier."
        />

        <GuideCard
          image={socialmedia}
          title="Social Media"
          category="MARKETING"
          description="Learn how to build an online presence and reach more people through social media."
        />
      </div>
    </section>
  );
}

export default FeaturedGuides;
