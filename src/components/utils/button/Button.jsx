import css from "./Button.module.css";
const Button = ({ text, todo, denger, type }) => {
  const style = denger ? "#CA2906" : "#00B0FF";
  return (
    <button
      type={type}
      onClick={todo}
      className={css.button}
      style={{ backgroundColor: `${style}` }}
    >
      {text}
    </button>
  );
};
export default Button;
