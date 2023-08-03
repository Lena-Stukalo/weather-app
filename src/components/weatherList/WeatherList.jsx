import css from "./WeatherList.module.css";
import WeatherCard from "./weatherCard/WeatherCard";

function WeatherList({ week }) {
  return (
    <>
      <h2>Week</h2>
      <ul className={css.list}>
        {week.map((day) => {
          return (
            <li className={css.item} key={day.datetime}>
              <WeatherCard day={day} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default WeatherList;
