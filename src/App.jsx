import AsideBar from "./components/aside/AsideBar";
import LayOut from "./components/layOut/LayOut";
import css from "./App.module.css";
import { useState } from "react";
import { useGetWeatherQuery } from "./redux/weather";
import { useGetTodayWeatherQuery } from "./redux/trip";

function App() {
  const [trips, setTrips] = useState([
    {
      city: {
        name: "Kyiv",
        src: "https://files.fm/thumb_show.php?i=tx2hzmyz5",
      },
      start_date: "2023-08-05",
      end_date: "2023-08-07",
    },
  ]);
  const [trip, setTrip] = useState(trips[0]);
  const { data, isFetching } = useGetWeatherQuery({ ...trip });
  if (data) {
    return (
      <div className={css.App}>
        {data && (
          <LayOut
            data={data}
            setTrip={setTrip}
            setTrips={setTrips}
            trips={trips}
          />
        )}
        {trip && <AsideBar trip={trip} />}
      </div>
    );
  }
}

export default App;
