import WeatherToday from "../weatherToday/WeatherToday";
import TimeList from "../weatherToday/timeList/TimeList";
import css from "./AsideBar.module.css";
import { useGetTodayWeatherQuery } from "../../redux/trip";
function AsideBar({ trip }) {
  const { data: today, isFetching } = useGetTodayWeatherQuery({
    city: trip.city,
  });
  //const [date, setDate] = useState(new Date());
  const date = Date.parse(trip.start_date) - new Date();
  console.log(date);
  // const date = new Date();
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
