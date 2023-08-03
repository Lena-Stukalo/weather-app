import AsideBar from "./components/aside/AsideBar";
import LayOut from "./components/layOut/LayOut";
import css from "./App.module.css";

function App() {
  return (
    <div className={css.App}>
      <LayOut />
      <AsideBar />
    </div>
  );
}

export default App;
