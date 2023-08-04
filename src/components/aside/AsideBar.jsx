import WeatherToday from "../weatherToday/WeatherToday";
import TimeList from "../weatherToday/timeList/TimeList";
import css from "./AsideBar.module.css";
import { useGetTodayWeatherQuery } from "../../redux/trip";
function AsideBar({ trip }) {
  const { data: today } = useGetTodayWeatherQuery({
    city: trip.city,
  });
  if (today) {
    return (
      <div className={css.container}>
        <WeatherToday day={today.days[0]} city={today.address} />
        <TimeList date={trip.start_date} />
      </div>
    );
  }
}

export default AsideBar;
