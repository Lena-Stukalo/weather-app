import css from "./AddForm.module.css";
import Button from "../utils/button/Button";
import { useState } from "react";

const AddForm = ({ operation, closeModal, params }) => {
  const [formData, setFormData] = useState({
    city: "",
    start_date: "",
    end_date: "",
  });
  const onSubmitForm = (event) => {
    event.preventDefault();
    operation(new FormData(event.target));
    closeModal();
  };
  const onInputChange = (event) => {
    const { name } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));
  };

  return (
    <>
      <h2 className={css.title}>Create Trip</h2>
      <form onSubmit={onSubmitForm} className={css.form}>
        <div className={css.inputWraper}>
          <label htmlFor="city" className={css.label}>
            <span className={css.span}>*</span> City
          </label>
          <div className={css.modalWrapper}>
            <input
              type="text"
              value={formData.nickname}
              className={css.modalInput}
              name="city"
              id="city"
              required
              onChange={onInputChange}
            ></input>
          </div>
          <label htmlFor="start_date" className={css.label}>
            <span className={css.span}>*</span> Start Date
          </label>
          <div className={css.modalWrapper}>
            <input
              type="text"
              required
              value={formData.real_name}
              onChange={onInputChange}
              className={css.modalInput}
              name="start_date"
              id="start_date"
            ></input>
          </div>
          <label htmlFor="end_date" className={css.label}>
            <span className={css.span}>*</span> End Date
          </label>
          <div className={css.modalWrapper}>
            <input
              required
              value={formData.catch_phrase}
              onChange={onInputChange}
              type="text"
              className={css.modalInput}
              name="start_date"
              id="start_date"
            ></input>
          </div>
        </div>
        <div className={css.buttonWraper}>
          <Button type={"submit"} text={"Send"} />
          <Button type={"button"} text={"Cencel"} />
        </div>
      </form>
    </>
  );
};
export default AddForm;
