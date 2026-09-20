import "./resource.css";
import ResourceCard from "./resource-card";

import hero1 from "../assets/hero-1.jpeg";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpeg";

const resources = [
  {
    image: hero1,
    type: "GUIDE",
    title: "A Beginner's Guide to Digitalization",
    description:
      "Learn how organizations can move from manual processes to simple and efficient digital workflows.",
  },

  {
    image: hero2,
    type: "ARTICLE",
    title: "How to Digitize Your Organization",
    description:
      "Understand the basic steps required to introduce digital tools into everyday organizational work.",
  },

  {
    image: hero3,
    type: "GUIDE",
    title: "Digital Tools Every NGO Should Know",
    description:
      "Explore useful technologies that can improve communication, productivity and collaboration.",
  },

  {
    image: hero1,
    type: "ARTICLE",
    title: "Automating Manual Work",
    description:
      "Discover how automation can reduce repetitive tasks and allow teams to focus on meaningful work.",
  },

  {
    image: hero2,
    type: "GUIDE",
    title: "Getting Started With Cloud Technology",
    description:
      "A simple introduction to cloud-based tools and how they can help organizations work efficiently.",
  },

  {
    image: hero3,
    type: "ARTICLE",
    title: "Technology for Better Teamwork",
    description:
      "Learn how modern workplace technology can improve collaboration between teams.",
  },
];

function ResourceGrid() {
  return (
    <section
      className="all-resources"
      id="guides"
    >
      <div className="section-heading resources-heading">
        <div>
          <h2>
            Explore Resources
          </h2>

          <p>
            Guides and articles created to make
            digitalization easier.
          </p>
        </div>

        <button className="view-all-button">
          View All →
        </button>
      </div>

      <div className="resource-grid">
        {resources.map((resource, index) => (
          <ResourceCard
            key={index}
            image={resource.image}
            type={resource.type}
            title={resource.title}
            description={resource.description}
          />
        ))}
      </div>
    </section>
  );
}

export default ResourceGrid;