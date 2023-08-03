import css from "./Title.module.css";

function Title() {
  return (
    <h1 className={css.title}>
      Weather <span className={css.span}>Forcast</span>
    </h1>
  );
}

export default Title;
