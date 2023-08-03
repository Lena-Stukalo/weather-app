import Searchbar from "../serch/SearchBar";
import Title from "../title/Title";
import TripList from "../tripList/TripList";
import WeatherList from "../weatherList/WeatherList";
import css from "./LayOut.module.css";
import Modal from "../modal/Modal";
import AddForm from "../addForm/AddForm";
import { useState } from "react";

function LayOut() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const trips = [
    {
      name: "London",
      start: "14.02.23",
      end: "18.02.23",
      src: "https://files.fm/thumb_show.php?i=q7gcgkdbr",
    },
    {
      name: "Kyiv",
      start: "14.02.23",
      end: "18.02.23",
      src: "https://files.fm/thumb_show.php?i=tx2hzmyz5",
    },
    {
      name: "Kyiv",
      start: "14.02.23",
      end: "18.02.23",
      src: "https://files.fm/thumb_show.php?i=2zs72rszq",
    },
  ];
  const weather = [
    {
      datetime: "2023-08-02",
      tempmax: 83.0,
      tempmin: 63.2,
      temp: 72.2,
      icon: "rain",
    },
    {
      datetime: "2023-08-03",
      tempmax: 82.8,
      tempmin: 64.1,
      temp: 72.8,
      icon: "rain",
    },
    {
      datetime: "2023-08-04",
      tempmax: 91.5,
      tempmin: 67.2,
      temp: 79.4,
      icon: "clear-day",
    },
    {
      datetime: "2023-08-05",
      tempmax: 92.9,
      tempmin: 71.7,
      temp: 82.2,
      icon: "clear-day",
    },
  ];
  return (
    <div className={css.container}>
      <Title />
      <Searchbar />
      <TripList trips={trips} toggleModal={toggleModal} />
      <WeatherList week={weather} />
      {showModal && (
        <Modal toggleModal={toggleModal}>
          <AddForm />
        </Modal>
      )}
    </div>
  );
}

export default LayOut;
