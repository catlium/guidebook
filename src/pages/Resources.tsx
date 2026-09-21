import ResourceVideos from "../components/resource-videos";
import ResourcesHero from "../components/resources-hero";

function Resources() {
  return (
    <div className="resources-page">
      <ResourcesHero />

      <main className="resources-content">
        <ResourceVideos />
      </main>
    </div>
  );
}

export default Resources;