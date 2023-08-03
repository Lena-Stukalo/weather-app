import css from "../WeatherToday.module.css";
function TimeList({ date }) {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <p className={css.date}>
          {date.getDate()}
          <span className={css.count}>Days</span>
        </p>
      </li>
      <li className={css.item}>
        <p className={css.date}>
          {date.getHours()}
          <span className={css.count}>Hours</span>
        </p>
      </li>
      <li className={css.item}>
        <p className={css.date}>
          {date.getMinutes()}
          <span className={css.count}>Minutes</span>
        </p>
      </li>
      <li className={css.item}>
        <p className={css.date}>
          {date.getSeconds()}
          <span className={css.count}>Secounds</span>
        </p>
      </li>
    </ul>
  );
}

export default TimeList;
