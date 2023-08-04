import WeatherToday from "../weatherToday/WeatherToday";
import TimeList from "../weatherToday/timeList/TimeList";
import css from "./AsideBar.module.css";
import { useGetTodayWeatherQuery } from "../../redux/trip";
function AsideBar({ city }) {
  const { data: today, isFetching } = useGetTodayWeatherQuery({
    city,
  });
  const date = new Date();
  if (today) {
    return (
      <div className={css.container}>
        <WeatherToday day={today.days[0]} city={today.address} />
        <TimeList date={date} />
      </div>
    );
  }
}

export default AsideBar;
