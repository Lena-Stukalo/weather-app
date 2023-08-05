import css from "./TripList.module.css";
import TripCard from "./tripCard/TripCard";
import Button from "../utils/button/Button";
import { useState } from "react";

function TripList({ trips, toggleModal, onClick }) {
  const [page, setPage] = useState(0);
  const limit = 3;
  const handleLoadmore = () => {
    setPage((prev) => prev + 1);
  };
  const handleLoadPrev = () => {
    setPage((prev) => prev - 1);
  };
  const hendleButtonClick = (trip) => {
    onClick(trip);
  };
  let scip = page * limit;
  return (
    <div>
      <ul className={css.list}>
        {trips
          .slice(scip)
          .slice(0, 3)
          .map((trip) => {
            return (
              <li className={css.item} key={trip.city.src}>
                <button
                  className={css.card}
                  onClick={() => hendleButtonClick(trip)}
                  value={trip}
                >
                  <TripCard
                    start={trip.start_date}
                    end={trip.end_date}
                    name={trip.city.name}
                    img={trip.city.src}
                  />
                </button>
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
      <div className={css.buttonWraper}>
        {page !== 0 && (
          <Button text={"Back"} todo={handleLoadPrev} type={"button"} />
        )}
        {scip + limit < trips.length && (
          <Button text={"Next"} todo={handleLoadmore} type={"button"} />
        )}
      </div>
    </div>
  );
}

export default TripList;
