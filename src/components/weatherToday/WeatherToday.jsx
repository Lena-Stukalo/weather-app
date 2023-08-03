import css from "./WeatherToday.module.css";
import TimeList from "./timeList/TimeList";
function WeatherToday({ day, city }) {
  const getWeekDay = (date) => {
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = new Date(date).getDay();
    return weekdays[day];
  };
  const getWeatherImg = (icon) => {
    switch (icon) {
      case "rain":
        return "https://img.icons8.com/fluency/48/rain.png";
      case "snow":
        return "https://img.icons8.com/fluency/48/snow.png";
      case "fog":
        return "https://img.icons8.com/fluency/48/foggy-night-1.png";
      case "wind":
        return "https://img.icons8.com/fluency/48/windy-weather.png";
      case "cloudy":
        return "https://img.icons8.com/fluency/48/clouds.png";
      case "partly-cloudy-day":
        return "https://img.icons8.com/fluency/48/partly-cloudy-day.png";
      case "partly-cloudy-night":
        return "https://img.icons8.com/fluency/48/partly-cloudy-night.png";
      case "clear-day":
        return "https://img.icons8.com/fluency/48/sun.png";
      case "clear-night":
        return "https://img.icons8.com/fluency/48/moon.png";
      default:
        return "https://files.fm/thumb_show.php?i=wc3yapa63";
    }
  };
  return (
    <div className={css.container}>
      <h2 className={css.week}>{getWeekDay(day.datetime)}</h2>
      <div className={css.wraper}>
        <h3 className={css.temp}>{day.temp}°</h3>
        <img src={getWeatherImg(day.icon)} alt="weather" className={css.img} />
      </div>
      <p className={css.city}>{city}</p>
    </div>
  );
}

export default WeatherToday;
