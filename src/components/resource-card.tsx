import "./resource.css";

type ResourceCardProps = {
  image: string;
  type: string;
  title: string;
  description: string;
};

function ResourceCard({
  image,
  type,
  title,
  description,
}: ResourceCardProps) {
  return (
    <article className="resource-card">
      <div className="resource-card-image">
        <img
          src={image}
          alt={title}
        />

        <span className="card-type">
          {type}
        </span>
      </div>

      <div className="resource-card-content">
        <h3>
          {title}
        </h3>

        <p>
          {description}
        </p>

        <a href="#read">
          Read More
          <span>→</span>
        </a>
      </div>
    </article>
  );
}

export default ResourceCard;