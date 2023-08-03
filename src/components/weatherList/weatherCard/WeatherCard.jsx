function WeatherCard({ day }) {
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
  const getCelsius = (f) => {
    const c = ((f - 32) * 5) / 9;
    return c.toFixed(1);
  };
  return (
    <div>
      <h3>{getWeekDay(day.datetime)}</h3>
      <img src={getWeatherImg(day.icon)} alt="" />
      <p>
        <span>{getCelsius(day.tempmax)}°</span>/
        <span>{getCelsius(day.tempmin)}°</span>
      </p>
    </div>
  );
}

export default WeatherCard;
