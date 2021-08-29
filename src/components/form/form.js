import React from "react";
import "./form.css"

const Form = () => {
  return (
    <section className="form">
      <form>
        <div className="form__section1">
          <h2 className="form__section--text">
            <p>QUESTION?</p>
            <p>WE ARE HERE</p>
            <p>TO HELP!</p>
          </h2>
        </div>
        <div className="form__section2">
          <div className="form__text-row">
            <div className="form__fields">
              <input type="text" id="name" name="name" />
              <label>Name</label>
            </div>
            <div className="form__fields">
              <input type="email" id="email" name="email" required />
              <label>Email</label>
              <p className="form__required">This field is required</p>
            </div>
            <div className="form__fields">
              <textarea id="message" name="message" rows="4" maxLength="40" />
              <label>Message</label>
            </div>
          </div>
          <div className="form__submit">
            <input type="submit" id="submit" value="Sen" />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
