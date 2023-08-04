import Searchbar from "../serch/SearchBar";
import Title from "../title/Title";
import TripList from "../tripList/TripList";
import WeatherList from "../weatherList/WeatherList";
import css from "./LayOut.module.css";
import Modal from "../modal/Modal";
import AddForm from "../addForm/AddForm";
import { useState } from "react";

function LayOut({ data, trips, setTrips, setTrip }) {
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("");
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  const onClick = (trip) => {
    setTrip(trip);
  };
  const onFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const calculateTrips = () => {
    const normalizeFilter = filter.toLowerCase();
    if (trips) {
      return trips.filter((trip) =>
        trip.city.name.toLowerCase().includes(normalizeFilter)
      );
    }
  };

  let visibleTripds = [];

  if (trips) {
    visibleTripds = calculateTrips();
  }

  if (data) {
    return (
      <div className={css.container}>
        <Title />
        <Searchbar filter={filter} onFilterChange={onFilterChange} />
        <TripList
          trips={visibleTripds}
          toggleModal={toggleModal}
          onClick={onClick}
        />
        <WeatherList week={data.days} />
        {showModal && (
          <Modal toggleModal={toggleModal}>
            <AddForm setTrip={setTrips} closeModal={toggleModal} />
          </Modal>
        )}
      </div>
    );
  }
}

export default LayOut;
