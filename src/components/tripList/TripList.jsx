import css from "./TripList.module.css";
import TripCard from "./tripCard/TripCard";

function TripList({ trips, toggleModal }) {
  return (
    <ul className={css.list}>
      {trips.map((trip) => {
        return (
          <li className={css.item} key={trip.src}>
            <TripCard
              start={trip.start}
              end={trip.end}
              name={trip.name}
              img={trip.src}
            />
          </li>
        );
      })}
      <li className={css.item}>
        <button className={css.addButton} onClick={toggleModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={css.svg}
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span className={css.buttonText}>Add trip</span>
        </button>
      </li>
    </ul>
  );
}

export default TripList;
