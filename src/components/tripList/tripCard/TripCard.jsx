import css from "./TripCard.module.css";
function TripCard({ name, start, end, img }) {
  return (
    <div>
      <img src={img} alt="city" className={css.img} />
      <h3>{name}</h3>
      <p>
        {start} - {end}
      </p>
    </div>
  );
}

export default TripCard;
