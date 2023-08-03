import WeatherToday from "../weatherToday/WeatherToday";
import TimeList from "../weatherToday/timeList/TimeList";
import css from "./AsideBar.module.css";
function AsideBar() {
  const today = {
    address: "Kyiv",
    days: [
      {
        datetime: "2023-08-03",
        tempmax: 27.6,
        tempmin: 18.5,
        temp: 22.3,
        icon: "rain",
      },
    ],
  };
  const date = new Date();
  return (
    <div className={css.container}>
      <WeatherToday day={today.days[0]} city={today.address} />
      <TimeList date={date} />
    </div>
  );
}

export default AsideBar;
