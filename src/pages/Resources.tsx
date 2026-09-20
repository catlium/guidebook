import ResourceCTA from "../components/resource-cta";
import ResourceFeature from "../components/resource-feature";
import ResourceGrid from "../components/resource-grid";
import ResourceNavigation from "../components/resource-navigation";
import ResourcesHero from "../components/resources-hero";

function Resources() {
  return (
    <div className="resources-page">
      <ResourcesHero />

      <ResourceNavigation />

      <main className="resources-content">
        <ResourceFeature />

        <ResourceGrid />

        <ResourceCTA />
      </main>
    </div>
  );
}

export default Resources;