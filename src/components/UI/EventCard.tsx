export const EventCard = ({
  image,
  title,
  time,
  place,
  sub,
  href,
  icon,
  reverse,
}: {
  image: string;
  title: string;
  time: string;
  place: string;
  sub: string;
  href: string;
  icon: string;
  reverse?: boolean;
}) => {
  return (
    <div className={`event-card ${reverse ? "event-card-reverse" : ""}`}>
      <div className="event-image-wrapper">
        <img src={image} alt={title} loading="lazy" className="event-image" />
      </div>

      <div className="event-content">
        <div className="event-icon">{icon}</div>

        <h3 className="event-title">{title}</h3>

        <div className="divider-ornament event-divider">
          <span>•</span>
        </div>

        <p className="event-time">{time}</p>

        <p className="event-place">{place}</p>

        <p className="event-sub">{sub}</p>

        <a href={href} target="_blank" rel="noreferrer" className="event-link">
          Ինչպես հասնել
        </a>
      </div>
    </div>
  );
};
