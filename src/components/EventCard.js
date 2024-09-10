import "./EventCard.css"

function EventCard({ title, date, location }) {
  return (
    <div className="event-card">
      <h3 className="event-title">{title}</h3>
      <p className="event-date">Дата: {date}</p>
      <p className="event-location">Место: {location}</p>
    </div>
  );
};

export default EventCard;