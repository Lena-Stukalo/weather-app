import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import date from "../../mock/citys.json";
import css from "./AddForm.module.css";
import Button from "../utils/button/Button";

const AddForm = ({ closeModal, setTrip }) => {
  const [formData, setFormData] = useState({
    city: { name: "", src: "" },
    start_date: "",
    end_date: "",
  });
  const formatDate = (date) => {
    const formatdate = [
      date.getFullYear(),
      "0" + (date.getMonth() + 1),
      date.getDate(),
    ].join("-");
    return formatdate;
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
    setTrip((prev) => {
      const result = [
        ...prev,
        {
          city: formData.city,
          start_date: formatDate(formData.start_date),
          end_date: formatDate(formData.end_date),
        },
      ];
      localStorage.setItem("trips", JSON.stringify(result));
      return result;
    });
    closeModal();
  };
  const onInputChange = (event) => {
    const { name } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: JSON.parse(event.target.value),
    }));
  };
  const onStartDateInputCange = (date) => {
    setFormData((prevState) => ({
      ...prevState,
      start_date: date,
    }));
  };
  const onEndDateInputCange = (date) => {
    setFormData((prevState) => ({
      ...prevState,
      end_date: date,
    }));
  };
  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  return (
    <>
      <h2 className={css.title}>Create Trip</h2>
      <form onSubmit={onSubmitForm} className={css.form}>
        <div className={css.inputWraper}>
          <label htmlFor="city" className={css.label}>
            <span className={css.span}>*</span> City
          </label>
          <div className={css.modalWrapper}>
            <select
              type="text"
              className={css.modalInput}
              name="city"
              id="city"
              required
              onChange={onInputChange}
            >
              {date.city.map((city) => (
                <option value={JSON.stringify(city)} key={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
          <label htmlFor="start_date" className={css.label}>
            <span className={css.span}>*</span> Start Date
          </label>
          <div className={css.modalInput}>
            <DatePicker
              type="text"
              required
              selected={formData.start_date}
              onChange={onStartDateInputCange}
              className={css.dataPicker}
              name="start_date"
              id="start_date"
              dateFormat="yyyy-MM-dd"
              minDate={new Date()}
              maxDate={addDays(new Date(), 15)}
            ></DatePicker>
          </div>
          <label htmlFor="end_date" className={css.label}>
            <span className={css.span}>*</span> End Date
          </label>
          <div className={css.modalInput}>
            <DatePicker
              required
              selected={formData.end_date}
              onChange={onEndDateInputCange}
              type="text"
              className={css.dataPicker}
              name="end_date"
              id="end_date"
              dateFormat="yyyy-MM-dd"
              minDate={new Date()}
              maxDate={addDays(new Date(), 15)}
            ></DatePicker>
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
