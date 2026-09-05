import "./guide-card.css";

type GuideCardProps = {
    image:string;
    title: string;
    category: string;
    description: string;
};

function GuideCard({image,title,category,description}: GuideCardProps) {
  return (
    <article className="guide-card">
      <div className="guide-card-image">
        <img src={image} alt="image" />
      </div>

      <div className="guide-card-content">
        <p className="guide-card-category">{category}</p>

        <h3>{title}</h3>

        <p>{description}</p>

        <button className="guide-card-button">Read Guide →</button>
      </div>
    </article>
  );
}

export default GuideCard;
